/* eslint-disable @stylistic/indent */
import { monochromatic } from '../features';
import {
  MoebiusColorValueHexType,
  MoebiusPaletteAccentColorsInterface,
  MoebiusPaletteColorsInterface,
  MoebiusPaletteOptionsType
} from '../types';

/**
 * Class representing a set of accent colors in various palettes.
 */
export class MoebiusAccentColors
  implements MoebiusPaletteAccentColorsInterface
{
  interpolate: MoebiusColorValueHexType[][];
  luminanceShift: MoebiusColorValueHexType[][];
  monochromatic: MoebiusColorValueHexType[][];
  complement: MoebiusColorValueHexType[][];
  split: MoebiusColorValueHexType[][];
  triadic: MoebiusColorValueHexType[][];
  tetradic: MoebiusColorValueHexType[][];
  pentadic: MoebiusColorValueHexType[][];
  hexadic: MoebiusColorValueHexType[][];
  analogous: MoebiusColorValueHexType[][];

  /**
   * Creates an instance of MoebiusAccentColors.
   * @param {MoebiusPaletteColorsInterface} colors - Base colors for accent palettes.
   * @param {MoebiusPaletteOptionsType} options - Options for generating accent palettes.
   * @example
   * ```ts
   * const colors = {
   *   monochromatic: ['#ff0000', '#00ff00'],
   *   // other base palettes...
   * };
   * const options = { baseColor: { color: '#ff0000', name: 'Red', hex: '#ff0000' }, numberOfColors: 9 };
   * const accentColors = new MoebiusAccentColors(colors, options);
   * ```
   */
  constructor(
    colors: MoebiusPaletteColorsInterface,
    options: MoebiusPaletteOptionsType
  ) {
    Object.keys(colors).forEach((palette) => {
      this[palette] = colors[palette].map((color: MoebiusColorValueHexType) =>
        monochromatic(color, { ...options, numberOfColors: 9 })
      );
    });
  }
  /**
   * Converts the accent palettes to a flat array.
   * @returns {MoebiusColorValueHexType[]} - Array of hex color values.
   * @example
   * ```ts
   * const accentColors = new MoebiusAccentColors(baseColors, options);
   * const flatArray = accentColors.toArray();
   * console.log(flatArray); // ['#ff0000', '#00ff00', ...]
   * ```
   */
  toArray(): MoebiusColorValueHexType[] {
    return [
      ...this.interpolate,
      ...this.luminanceShift,
      ...this.monochromatic,
      ...this.complement,
      ...this.split,
      ...this.triadic,
      ...this.tetradic,
      ...this.pentadic,
      ...this.hexadic,
      ...this.analogous
    ].flat();
  }
}
