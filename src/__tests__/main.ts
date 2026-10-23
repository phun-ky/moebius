import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import fc from 'fast-check';

import Moebius from '../main';

const NAMES = { Orange: '#ff9900', 'Deep Sea': '#003f5c', White: '#ffffff' };

describe('Moebius', () => {
  it('names colors from colorNames without fetching', async (t) => {
    const fetchSpy = t.mock.method(globalThis, 'fetch');
    const { MoebiusColor } = await Moebius({ colorNames: NAMES });

    assert.equal(new MoebiusColor('#ff9900').name, 'Orange');
    assert.equal(new MoebiusColor('#fe9a01').name, 'Orange');
    assert.equal(new MoebiusColor('#003f5c').name, 'Deep Sea');
    assert.equal(fetchSpy.mock.callCount(), 0);
  });

  it('gives empty names and makes no request with colorNames: false', async (t) => {
    const fetchSpy = t.mock.method(globalThis, 'fetch');
    const warn = t.mock.method(console, 'warn', () => {});
    const { MoebiusColor } = await Moebius({ colorNames: false });

    assert.equal(new MoebiusColor('#ff9900').name, '');
    assert.equal(new MoebiusColor('#ff9900').hex, '#ff9900');
    assert.equal(fetchSpy.mock.callCount(), 0);
    assert.equal(warn.mock.callCount(), 0);
  });

  it('throws TypeError for options that are not an object', async () => {
    for (const options of [null, 'names.json', 1, [NAMES]]) {
      await assert.rejects(
        // @ts-expect-error: testing invalid input
        Moebius(options),
        TypeError,
        String(options)
      );
    }
  });

  it('throws TypeError for colorNames in an unsupported shape', async () => {
    // @ts-expect-error: testing invalid input
    await assert.rejects(Moebius({ colorNames: 42 }), TypeError);
    await assert.rejects(
      Moebius({ colorNames: { Orange: 'orange' } }),
      TypeError
    );
  });

  it('names any color in the map with a name that has that color', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.dictionary(
          fc.string({ minLength: 1 }),
          fc.stringMatching(/^#[0-9a-f]{6}$/),
          { minKeys: 1 }
        ),
        async (colorNames) => {
          const { MoebiusColor } = await Moebius({ colorNames });

          for (const hex of Object.values(colorNames)) {
            const { name } = new MoebiusColor(hex);

            assert.equal(colorNames[name], hex);
          }
        }
      ),
      { numRuns: 200 }
    );
  });

  it('creates palettes with reverseDirection: true and the default noDuplicates', async () => {
    const { MoebiusColor, MoebiusPalettes } = await Moebius({
      colorNames: false
    });
    const palettes = new MoebiusPalettes({
      baseColor: new MoebiusColor('#003f5c'),
      secondaryColor: new MoebiusColor('#ff9900'),
      divergentColor: '#f5f5f5',
      reverseDirection: true
    });

    assert.ok(palettes.themes.darkMode.mixed.length > 0);
  });

  it('creates palettes for any colors and options without throwing', async () => {
    const { MoebiusColor, MoebiusPalettes } = await Moebius({
      colorNames: false
    });

    fc.assert(
      fc.property(
        fc.stringMatching(/^#[0-9a-f]{6}$/),
        fc.stringMatching(/^#[0-9a-f]{6}$/),
        fc.boolean(),
        fc.boolean(),
        fc.boolean(),
        (base, secondary, reverseDirection, noDuplicates, diverging) => {
          const palettes = new MoebiusPalettes({
            baseColor: new MoebiusColor(base),
            secondaryColor: new MoebiusColor(secondary),
            divergentColor: '#f5f5f5',
            reverseDirection,
            noDuplicates,
            diverging
          });

          for (const hex of palettes.themes.darkMode.mixed) {
            assert.match(hex, /^#[0-9a-f]{6}$/);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
