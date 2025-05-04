import {
  MoebiusColorValueHexType,
  MoebiusThemeColorsInterface
} from '../types';

/**
 * Class representing a set of colors in various themes.
 */
export class MoebiusThemeColors implements MoebiusThemeColorsInterface {
  darkMode: Record<string, MoebiusColorValueHexType[]>;

  /**
   * Creates an instance of MoebiusThemeColors.
   * @param {MoebiusThemeColorsInterface} colors - Palette colors to initialize with.
   * @example
   * ```ts
   * const colors = {
   *   interpolate: ['#ff0000', '#00ff00'],
   *   // other themes...
   * };
   * const theme = new MoebiusThemeColors(colors);
   * ```
   */
  constructor(colors: MoebiusThemeColorsInterface) {
    Object.keys(colors).forEach((theme) => {
      this[theme] = colors[theme];
    });
  }
}
