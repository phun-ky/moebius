import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { MoebiusThemeColorsInterface } from '../../types/index.ts';
import { MoebiusThemeColors } from '../MoebiusThemeColors.ts';

describe('MoebiusThemeColors', () => {
  it('should create an instance of MoebiusThemeColors', () => {
    const colors = {
      darkmode: {
        primary: ['#212121', '#ffffff'],
        secondary: ['#2c2c2c', '#e0e0e0']
      },
      lightmode: {
        primary: ['#ffffff', '#000000'],
        secondary: ['#f5f5f5', '#333333']
      }
    };
    const theme = new MoebiusThemeColors(colors as MoebiusThemeColorsInterface);

    assert.strictEqual(typeof theme, 'object');
    assert.ok(theme.darkmode);
    // @ts-expect-error i know
    assert.ok(theme.lightmode);

    // Check if color arrays are properly assigned
    assert(Array.isArray(theme.darkmode.primary));
    assert.strictEqual(theme.darkmode.primary.length, 2);
    assert.strictEqual(typeof theme.darkmode.primary[0], 'string');

    assert(Array.isArray(theme.darkmode.secondary));
    assert.strictEqual(theme.darkmode.secondary.length, 2);
    assert.strictEqual(typeof theme.darkmode.secondary[0], 'string');

    // @ts-expect-error i know
    assert(Array.isArray(theme.lightmode.primary));
    // @ts-expect-error i know
    assert.strictEqual(theme.lightmode.primary.length, 2);
    // @ts-expect-error i know
    assert.strictEqual(typeof theme.lightmode.primary[0], 'string');

    // @ts-expect-error i know
    assert(Array.isArray(theme.lightmode.secondary));
    // @ts-expect-error i know
    assert.strictEqual(theme.lightmode.secondary.length, 2);
    // @ts-expect-error i know
    assert.strictEqual(typeof theme.lightmode.secondary[0], 'string');
  });
});
