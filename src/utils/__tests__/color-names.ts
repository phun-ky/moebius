import assert from 'node:assert/strict';
import { createServer, Server } from 'node:http';
import { AddressInfo } from 'node:net';
import { after, before, describe, it, mock } from 'node:test';

import fc from 'fast-check';

import {
  createNameLookup,
  loadColorNames,
  toColorNameMap
} from '../color-names';

const MAP = { Orange: '#ff9900', 'Deep Sea': '#003f5c' };
const ARRAY = [
  { name: 'Orange', hex: '#ff9900' },
  { name: 'Deep Sea', hex: '#003f5c' }
];
const HEROKU = { colors: ARRAY };

describe('toColorNameMap', () => {
  it('reads a map, an array and the color-names API shape the same way', () => {
    const expected = { ...MAP };

    assert.deepEqual({ ...toColorNameMap(MAP) }, expected);
    assert.deepEqual({ ...toColorNameMap(ARRAY) }, expected);
    assert.deepEqual({ ...toColorNameMap(HEROKU) }, expected);
  });

  it('normalizes hex values to # and lowercase', () => {
    assert.deepEqual(
      { ...toColorNameMap({ A: 'FF9900', B: '#ABC', C: '#003F5C' }) },
      { A: '#ff9900', B: '#abc', C: '#003f5c' }
    );
  });

  it('keeps Object.prototype names as ordinary keys', () => {
    const map = toColorNameMap([
      { name: 'constructor', hex: '#000000' },
      { name: '__proto__', hex: '#ffffff' },
      { name: 'toString', hex: '#ff0000' }
    ]);

    assert.equal(Object.getPrototypeOf(map), null);
    assert.deepEqual(Object.keys(map), [
      'constructor',
      '__proto__',
      'toString'
    ]);
    assert.equal(map['__proto__'], '#ffffff');
  });

  it('throws TypeError for a value that is not a hex color', () => {
    assert.throws(() => toColorNameMap({ Orange: 'orange' }), TypeError);
    assert.throws(() => toColorNameMap({ Orange: '#ff99' }), TypeError);
    assert.throws(() => toColorNameMap({ Orange: 0xff9900 }), TypeError);
  });

  it('throws TypeError for a hex-to-name map passed by mistake', () => {
    assert.throws(
      () => toColorNameMap({ ff9900: 'Orange', '003f5c': 'Deep Sea' }),
      /"ff9900" must be a hex color/
    );
  });

  it('throws TypeError for array entries that are not { name, hex }', () => {
    assert.throws(() => toColorNameMap(['#ff9900']), TypeError);
    assert.throws(() => toColorNameMap([{ hex: '#ff9900' }]), TypeError);
    assert.throws(
      () => toColorNameMap([{ name: 'A', hex: 'nope' }]),
      TypeError
    );
  });

  it('throws TypeError for other shapes', () => {
    for (const data of [null, undefined, 1, true, 'x', new Map()]) {
      assert.throws(() => toColorNameMap(data), TypeError, String(data));
    }
  });

  it('throws RangeError when there are no colors', () => {
    assert.throws(() => toColorNameMap({}), RangeError);
    assert.throws(() => toColorNameMap([]), RangeError);
    assert.throws(() => toColorNameMap({ colors: [] }), RangeError);
  });

  it('keeps every name of any valid map, with the hex normalized', () => {
    const hex = fc
      .stringMatching(/^[0-9a-fA-F]{6}$/)
      .chain((h) => fc.constantFrom(h, `#${h}`));

    fc.assert(
      fc.property(
        fc.dictionary(fc.string({ minLength: 1 }), hex, { minKeys: 1 }),
        (data) => {
          const map = toColorNameMap(data);

          assert.deepEqual(Object.keys(map).sort(), Object.keys(data).sort());

          for (const [name, value] of Object.entries(data)) {
            assert.equal(map[name], `#${value.replace('#', '').toLowerCase()}`);
          }
        }
      )
    );
  });
});

describe('loadColorNames', () => {
  let server: Server;
  let base: string;

  // A real HTTP server, so fetch, status codes and JSON parsing are the real thing
  before(async () => {
    const routes: Record<string, [number, string]> = {
      '/map.json': [200, JSON.stringify(MAP)],
      '/array.json': [200, JSON.stringify(ARRAY)],
      '/heroku.json': [200, JSON.stringify(HEROKU)],
      '/broken.json': [200, '{ not json'],
      '/wrong-shape.json': [200, JSON.stringify('nope')]
    };

    server = createServer((req, res) => {
      const [status, body] = routes[req.url ?? ''] ?? [404, 'Not Found'];

      res.writeHead(status, { 'content-type': 'application/json' });
      res.end(body);
    });
    await new Promise<void>((resolve) =>
      server.listen(0, '127.0.0.1', resolve)
    );
    base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  });

  after(() => new Promise<void>((resolve) => server.close(() => resolve())));

  it('uses a map or an array without fetching', async (t) => {
    const fetchSpy = t.mock.method(globalThis, 'fetch');

    assert.deepEqual({ ...(await loadColorNames(MAP)) }, MAP);
    assert.deepEqual({ ...(await loadColorNames(ARRAY)) }, MAP);
    assert.equal(fetchSpy.mock.callCount(), 0);
  });

  it('fetches each supported shape from a URL', async () => {
    for (const path of ['/map.json', '/array.json', '/heroku.json']) {
      assert.deepEqual(
        { ...(await loadColorNames(`${base}${path}`)) },
        MAP,
        path
      );
    }
  });

  it('accepts a URL object', async () => {
    assert.deepEqual(
      { ...(await loadColorNames(new URL('/map.json', base))) },
      MAP
    );
  });

  it('throws an Error with the status for an error response', async () => {
    await assert.rejects(
      loadColorNames(`${base}/missing.json`),
      /404 Not Found/
    );
  });

  it('throws TypeError for a response that is not JSON', async () => {
    await assert.rejects(loadColorNames(`${base}/broken.json`), {
      name: 'TypeError',
      message: /did not return valid JSON/
    });
  });

  it('throws TypeError for JSON in another shape', async () => {
    await assert.rejects(loadColorNames(`${base}/wrong-shape.json`), TypeError);
  });

  it('does not warn when colorNames is passed', async (t) => {
    const warn = t.mock.method(console, 'warn', () => {});

    await loadColorNames(MAP);
    await loadColorNames(`${base}/map.json`);
    assert.equal(warn.mock.callCount(), 0);
  });
});

// Keep the global mock registry clean for other files run in the same process
after(() => mock.restoreAll());

describe('createNameLookup', () => {
  it('searches once per distinct color, whatever its notation', () => {
    const match = mock.fn((hex: string) => ({ name: `name of ${hex}` }));
    const lookup = createNameLookup(match);

    assert.equal(lookup('#ff9900'), 'name of #ff9900');
    assert.equal(lookup('#FF9900'), 'name of #ff9900');
    assert.equal(lookup('rgb(255, 153, 0)'), 'name of #ff9900');
    assert.equal(lookup('#f90'), 'name of #ff9900');
    assert.equal(match.mock.callCount(), 1);

    lookup('#003f5c');
    assert.equal(match.mock.callCount(), 2);
  });

  it('accepts string matches and treats no match as no name', () => {
    assert.equal(createNameLookup(() => 'Orange')('#ff9900'), 'Orange');
    assert.equal(createNameLookup(() => null)('#ff9900'), '');
  });

  it('gives the same names as an uncached search, for any colors', async () => {
    const nearestColor = (await import('nearest-color')).default;
    const names = {
      Orange: '#ff9900',
      'Deep Sea': '#003f5c',
      White: '#ffffff',
      Black: '#000000',
      Teal: '#008080'
    };
    const match = nearestColor.from(names);
    const lookup = createNameLookup(match);

    fc.assert(
      fc.property(
        fc.array(fc.stringMatching(/^#[0-9a-f]{6}$/), { minLength: 1 }),
        (colors) => {
          for (const color of [...colors, ...colors]) {
            assert.equal(lookup(color), match(color).name);
          }
        }
      )
    );
  });
});
