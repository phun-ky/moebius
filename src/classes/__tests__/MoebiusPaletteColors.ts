import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { MoebiusPaletteColorsInterface } from '../../types';
import { MoebiusPaletteColors } from '../MoebiusPaletteColors';

describe('MoebiusPaletteColors', () => {
  it('should create an instance of MoebiusPaletteColors', () => {
    const colors = {
      interpolate: ['#ff0000', '#00ff00'],
      luminanceShift: ['#ff9900', '#0099ff'],
      monochromatic: ['#ffcc00', '#ccff00'],
      complement: ['#ff6666', '#6666ff'],
      split: ['#ffcc66', '#66ffcc'],
      triadic: ['#ff3333', '#33ff33'],
      tetradic: ['#ff9933', '#3399ff'],
      pentadic: ['#ff0066', '#0066ff'],
      hexadic: ['#ff6699', '#9966ff'],
      analogous: ['#ff3366', '#6633ff']
    } as MoebiusPaletteColorsInterface;
    const palette = new MoebiusPaletteColors(colors);

    assert.strictEqual(palette instanceof MoebiusPaletteColors, true);
    Object.keys(colors).forEach((paletteType) => {
      assert.deepStrictEqual(palette[paletteType], colors[paletteType]);
    });
  });

  it('should convert palettes to a flat array', () => {
    const colors = {
      interpolate: ['#ff0000', '#00ff00'],
      luminanceShift: ['#ff9900', '#0099ff'],
      monochromatic: ['#ffcc00', '#ccff00'],
      complement: ['#ff6666', '#6666ff'],
      split: ['#ffcc66', '#66ffcc'],
      triadic: ['#ff3333', '#33ff33'],
      tetradic: ['#ff9933', '#3399ff'],
      pentadic: ['#ff0066', '#0066ff'],
      hexadic: ['#ff6699', '#9966ff'],
      analogous: ['#ff3366', '#6633ff']
    } as MoebiusPaletteColorsInterface;
    const palette = new MoebiusPaletteColors(colors);
    const flatArray = palette.toArray();

    assert.strictEqual(Array.isArray(flatArray), true);
    assert.strictEqual(flatArray.length, Object.values(colors).flat().length);
  });
});
