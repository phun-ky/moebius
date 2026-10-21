// The default URL warning is module state, so it has its own file: node --test
// runs each file in its own process, so the module starts fresh here
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { DEFAULT_COLOR_NAMES_URL, loadColorNames } from '../color-names';

describe('loadColorNames without colorNames', () => {
  it('fetches the default URL and warns once', async (t) => {
    const warn = t.mock.method(console, 'warn', () => {});
    const fetchMock = t.mock.method(globalThis, 'fetch', async () =>
      Response.json({ colors: [{ name: 'Orange', hex: '#ff9900' }] })
    );

    assert.deepEqual({ ...(await loadColorNames()) }, { Orange: '#ff9900' });
    await loadColorNames();

    assert.equal(fetchMock.mock.callCount(), 2);
    assert.equal(fetchMock.mock.calls[0].arguments[0], DEFAULT_COLOR_NAMES_URL);
    assert.equal(warn.mock.callCount(), 1);
    assert.match(String(warn.mock.calls[0].arguments[0]), /deprecated/);
  });
});
