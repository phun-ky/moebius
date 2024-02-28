import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { pentadic } from '../pentadic';

describe('pentadic', () => {
  it('should generate a pentadic color palette', () => {
    const baseColor = '#3498db';
    const pentadicPalette = pentadic(baseColor, { numberOfColors: 5 });

    assert.strictEqual(Array.isArray(pentadicPalette), true);
    assert.strictEqual(pentadicPalette.length, 5);

    pentadicPalette.forEach((color) => {
      assert.strictEqual(typeof color, 'string');
      assert.strictEqual(color.startsWith('#'), true);
    });
  });
});
