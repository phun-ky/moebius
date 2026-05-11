import {
  MoebiusColorValueHexType,
  MoebiusPaletteColorsInterface,
  MoebiusPaletteKey,
  paletteKeys
} from '../types';

/**
 * Class representing a set of colors in various palettes.
 */
export class MoebiusPaletteColors implements MoebiusPaletteColorsInterface {
  interpolate: MoebiusColorValueHexType[] = [];
  luminanceShift: MoebiusColorValueHexType[] = [];
  monochromatic: MoebiusColorValueHexType[] = [];
  complement: MoebiusColorValueHexType[] = [];
  split: MoebiusColorValueHexType[] = [];
  triadic: MoebiusColorValueHexType[] = [];
  tetradic: MoebiusColorValueHexType[] = [];
  pentadic: MoebiusColorValueHexType[] = [];
  hexadic: MoebiusColorValueHexType[] = [];
  analogous: MoebiusColorValueHexType[] = [];

  /**
   * Creates an instance of MoebiusPaletteColors.
   * @param {MoebiusPaletteColorsInterface} colors - Palette colors to initialize with.
   * @example
   * ```ts
   * const colors = {
   *   interpolate: ['#ff0000', '#00ff00'],
   *   // other palettes...
   * };
   * const palette = new MoebiusPaletteColors(colors);
   * ```
   */
  constructor(colors: MoebiusPaletteColorsInterface) {
    paletteKeys.forEach((palette: MoebiusPaletteKey) => {
      this[palette] = colors[palette];
    });
  }

  /**
   * Converts the palettes to a flat array.
   * @returns {MoebiusColorValueHexType[]} - Array of hex color values.
   * @example
   * ```ts
   * const palette = new MoebiusPaletteColors({ interpolate: ['#ff0000', '#00ff00'] });
   * const flatArray = palette.toArray();
   * console.log(flatArray); // ['#ff0000', '#00ff00']
   * ```
   */
  toArray(): MoebiusColorValueHexType[] {
    return paletteKeys.flatMap((palette) => this[palette]);
  }
}
