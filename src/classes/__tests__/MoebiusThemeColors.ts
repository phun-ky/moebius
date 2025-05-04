import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { MoebiusThemeColorsInterface } from '../../types/index.ts';
import { MoebiusThemeColors } from '../MoebiusThemeColors.ts';

describe('MoebiusThemeColors', () => {
  it('should create an instance of MoebiusThemeColors', () => {
    const colors = {
      darkMode: {
        primary: ['#212121', '#ffffff'],
        secondary: ['#2c2c2c', '#e0e0e0']
      },
      lightMode: {
        primary: ['#ffffff', '#000000'],
        secondary: ['#f5f5f5', '#333333']
      }
    };
    const theme = new MoebiusThemeColors(colors as MoebiusThemeColorsInterface);

    assert.strictEqual(typeof theme, 'object');
    assert.ok(theme.darkMode);
    // @ts-expect-error i know
    assert.ok(theme.lightMode);

    // Check if color arrays are properly assigned
    assert(Array.isArray(theme.darkMode.primary));
    assert.strictEqual(theme.darkMode.primary.length, 2);
    assert.strictEqual(typeof theme.darkMode.primary[0], 'string');

    assert(Array.isArray(theme.darkMode.secondary));
    assert.strictEqual(theme.darkMode.secondary.length, 2);
    assert.strictEqual(typeof theme.darkMode.secondary[0], 'string');

    // @ts-expect-error i know
    assert(Array.isArray(theme.lightMode.primary));
    // @ts-expect-error i know
    assert.strictEqual(theme.lightMode.primary.length, 2);
    // @ts-expect-error i know
    assert.strictEqual(typeof theme.lightMode.primary[0], 'string');

    // @ts-expect-error i know
    assert(Array.isArray(theme.lightMode.secondary));
    // @ts-expect-error i know
    assert.strictEqual(theme.lightMode.secondary.length, 2);
    // @ts-expect-error i know
    assert.strictEqual(typeof theme.lightMode.secondary[0], 'string');
  });
});
