import { MOEBIUS_PALETTE_DEFAULT_OPTIONS } from '../constants';
import {
  MoebiusColorValueHexType,
  MoebiusColorInterface,
  MoebiusPaletteAccentColorsInterface,
  MoebiusPaletteColorsInterface,
  MoebiusPaletteDefaultOptionsType,
  MoebiusPaletteOptionsType,
  MoebiusPaletteInterface
} from '../types';

import { MoebiusPaletteColors } from './MoebiusPaletteColors';
import { MoebiusAccentColors } from './MoebiusAccentColors';
import * as FEATURES from '../features';

/**
 * MoebiusPalettes class representing a set of color palettes and their variations.
 * @class
 */
export class MoebiusPalettes implements MoebiusPaletteInterface {
  baseColor: MoebiusColorInterface;
  secondaryColor: MoebiusColorInterface;
  colors: Record<string, unknown> | MoebiusPaletteColorsInterface = {};
  defaultOptions: MoebiusPaletteDefaultOptionsType = {
    ...MOEBIUS_PALETTE_DEFAULT_OPTIONS,
    divergentColor: '#f5f5f5'
  };
  options: MoebiusPaletteOptionsType;
  all: MoebiusColorValueHexType[] = [];
  accents: MoebiusPaletteAccentColorsInterface;

  /**
   * Creates an instance of MoebiusPalettes.
   * @param {MoebiusPaletteOptionsType} options - Options for configuring the palettes.
   */
  constructor(options: MoebiusPaletteOptionsType) {
    this.options = { ...this.defaultOptions, ...options };
    this.baseColor = this.options.baseColor;
    this.secondaryColor = this.options.secondaryColor;

    this.colors = new MoebiusPaletteColors({
      interpolate: this.interpolate(
        this.baseColor.hex,
        this.secondaryColor.hex,
        this.options
      ),
      luminanceShift: this.luminanceShift(
        [this.baseColor.hex],
        [this.secondaryColor.hex],
        this.options
      ),
      monochromatic: this.monochromatic(this.baseColor.hex),
      complement: this.complement(this.baseColor.hex),
      split: this.split(this.baseColor.hex),
      triadic: this.triadic(this.baseColor.hex),
      tetradic: this.tetradic(this.baseColor.hex),
      pentadic: this.pentadic(this.baseColor.hex),
      hexadic: this.hexadic(this.baseColor.hex),
      analogous: this.analogous(this.baseColor.hex)
    });

    this.accents = new MoebiusAccentColors(this.colors, this.options);

    this.all = [
      ...new Set(
        [
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(this.accents as any).toArray(),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(this.colors as any).toArray()
        ].flat()
      )
    ];
  }

  /**
   * Generate a complement color palette based on the input color.
   *
   * @param {MoebiusChromaColorInputType} color - The base color for generating the complement palette.
   * @param {MoebiusPaletteOptionsType} [options={}] - Options for generating the palette.
   *   @param {number} [options.numberOfColors=8] - The number of colors in the complement palette.
   *   @param {string} [options.colorScaleMode] - The color scale mode for chroma-js.
   *   @param {boolean} [options.correctLightness=true] - Whether to correct lightness in the generated palette.
   * @returns {MoebiusColorValueHexType[]} - Array of hex color values representing the complement palette.
   *
   * @example
   * ```ts
   * const baseColor = '#3498db';
   * const complementPalette = complement(baseColor, { numberOfColors: 5 });
   * console.log(complementPalette); // ['#3498db', '#db3434', '#75db34', '#dbd134', '#db7434']
   * ```
   */
  complement(
    color: MoebiusColorValueHexType,
    options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
  ): MoebiusColorValueHexType[] {
    const currentOptions = { ...this.options, ...options };

    return FEATURES.complement(color, currentOptions);
  }

  /**
   * Generate a split color palette based on the input color.
   *
   * @param {MoebiusChromaColorInputType} color - The base color for generating the split palette.
   * @param {MoebiusPaletteOptionsType} [options={}] - Options for generating the palette.
   *   @param {number} [options.numberOfColors=8] - The number of colors in the split palette.
   *   @param {string} [options.colorScaleMode] - The color scale mode for chroma-js.
   *   @param {boolean} [options.correctLightness=true] - Whether to correct lightness in the generated palette.
   * @returns {MoebiusColorValueHexType[]} - Array of hex color values representing the split palette.
   *
   * @example
   * ```ts
   * const baseColor = '#3498db';
   * const splitPalette = split(baseColor, { numberOfColors: 5 });
   * console.log(splitPalette); // ['#3498db', '#99db34', '#dbd134', '#db3434', '#8f34db']
   * ```
   */
  split(
    color: MoebiusColorValueHexType,
    options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
  ): MoebiusColorValueHexType[] {
    const currentOptions = { ...this.options, ...options };

    return FEATURES.split(color, currentOptions);
  }

  /**
   * Generates a triadic color palette based on the input color.
   *
   * @param {MoebiusChromaColorInputType} color - The input color in various formats (HEX, RGB, HSL, etc.).
   * @param {Record<string, unknown> | MoebiusPaletteOptionsType} options - Additional options for palette generation.
   * @param {number} [options.numberOfColors=8] - The number of colors in the generated palette.
   * @param {string} [options.colorScaleMode] - The color scale mode for the generated palette.
   * @param {boolean} [options.correctLightness=true] - Whether to correct lightness in the generated palette.
   * @returns {MoebiusColorValueHexType[]} An array of HEX values representing the triadic color palette.
   *
   * @example
   * ```ts
   * const triadicPalette = triadic('#3498db', { numberOfColors: 5 });
   * console.log(triadicPalette);
   * // Output: ['#3498db', '#db344f', '#4fdb34', '#9834db', '#34db98']
   * ```
   */
  triadic(
    color: MoebiusColorValueHexType,
    options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
  ): MoebiusColorValueHexType[] {
    const currentOptions = { ...this.options, ...options };

    return FEATURES.triadic(color, currentOptions);
  }

  /**
   * Generate a tetradic color palette based on the input color.
   *
   * @param {MoebiusChromaColorInputType} color - The base color for generating the tetradic palette.
   * @param {MoebiusPaletteOptionsType} [options={}] - Options for generating the palette.
   *   @param {number} [options.numberOfColors=8] - The number of colors in the tetradic palette.
   *   @param {string} [options.colorScaleMode] - The color scale mode for chroma-js.
   *   @param {boolean} [options.correctLightness=true] - Whether to correct lightness in the generated palette.
   * @returns {MoebiusColorValueHexType[]} - Array of hex color values representing the tetradic palette.
   *
   * @example
   * ```ts
   * const baseColor = '#3498db';
   * const tetradicPalette = tetradic(baseColor, { numberOfColors: 5 });
   * console.log(tetradicPalette); // ['#3498db', '#db3434', '#34db99', '#dbd134', '#8f34db']
   * ```
   */
  tetradic(
    color: MoebiusColorValueHexType,
    options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
  ): MoebiusColorValueHexType[] {
    const currentOptions = { ...this.options, ...options };

    return FEATURES.tetradic(color, currentOptions);
  }

  /**
   * Generate a pentadic color palette based on the input color.
   *
   * @param {MoebiusChromaColorInputType} color - The base color for generating the pentadic palette.
   * @param {MoebiusPaletteOptionsType} [options={}] - Options for generating the palette.
   *   @param {number} [options.numberOfColors=8] - The number of colors in the pentadic palette.
   *   @param {string} [options.colorScaleMode] - The color scale mode for chroma-js.
   *   @param {boolean} [options.correctLightness=true] - Whether to correct lightness in the generated palette.
   * @returns {MoebiusColorValueHexType[]} - Array of hex color values representing the pentadic palette.
   *
   * @example
   * ```ts
   * const baseColor = '#3498db';
   * const pentadicPalette = pentadic(baseColor, { numberOfColors: 5 });
   * console.log(pentadicPalette); // ['#3498db', '#dbd134', '#db3434', '#34db99', '#8f34db']
   * ```
   */
  pentadic(
    color: MoebiusColorValueHexType,
    options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
  ): MoebiusColorValueHexType[] {
    const currentOptions = { ...this.options, ...options };

    return FEATURES.pentadic(color, currentOptions);
  }

  /**
   * Generate a hexadic color palette based on the input color.
   *
   * @param {MoebiusChromaColorInputType} color - The base color for generating the hexadic palette.
   * @param {MoebiusPaletteOptionsType} [options={}] - Options for generating the palette.
   *   @param {number} [options.numberOfColors=8] - The number of colors in the hexadic palette.
   *   @param {string} [options.colorScaleMode] - The color scale mode for chroma-js.
   *   @param {boolean} [options.correctLightness=true] - Whether to correct lightness in the generated palette.
   * @returns {MoebiusColorValueHexType[]} - Array of hex color values representing the hexadic palette.
   *
   * @example
   * ```ts
   * const baseColor = '#3498db';
   * const hexadicPalette = hexadic(baseColor, { numberOfColors: 5 });
   * console.log(hexadicPalette); // ['#3498db', '#5d7f33', '#8473a9', '#ad7a95', '#db3434']
   * ```
   */
  hexadic(
    color: MoebiusColorValueHexType,
    options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
  ): MoebiusColorValueHexType[] {
    const currentOptions = { ...this.options, ...options };

    return FEATURES.hexadic(color, currentOptions);
  }

  /**
   * Generate an analogous color palette based on the input color.
   *
   * @param {MoebiusChromaColorInputType} color - The base color for generating the analogous palette.
   * @param {MoebiusPaletteOptionsType} [options={}] - Options for generating the palette.
   *   @param {number} [options.numberOfColors=8] - The number of colors in the analogous palette.
   *   @param {string} [options.colorScaleMode] - The color scale mode for chroma-js.
   *   @param {boolean} [options.correctLightness=true] - Whether to correct lightness in the generated palette.
   * @returns {MoebiusColorValueHexType[]} - Array of hex color values representing the analogous palette.
   *
   * @example
   * ```ts
   * const baseColor = '#3498db';
   * const analogousPalette = analogous(baseColor, { numberOfColors: 5 });
   * console.log(analogousPalette); // ['#3498db', '#75db34', '#dbd134', '#db7434', '#db3474']
   * ```
   */
  analogous(
    color: MoebiusColorValueHexType,
    options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
  ): MoebiusColorValueHexType[] {
    const currentOptions = { ...this.options, ...options };

    return FEATURES.analogous(color, currentOptions);
  }

  /**
   * Interpolate between two colors and generate a color palette.
   *
   * @param {MoebiusChromaColorInputType} primaryColor - The starting color for interpolation.
   * @param {MoebiusChromaColorInputType} secondaryColor - The ending color for interpolation.
   * @param {MoebiusPaletteOptionsType} [options={}] - Options for generating the palette.
   *   @param {number} [options.numberOfColors=8] - The number of colors in the interpolated palette.
   *   @param {string} [options.colorScaleMode] - The color scale mode for chroma-js.
   *   @param {boolean} [options.bezier=false] - Whether to use bezier interpolation.
   *   @param {boolean} [options.correctLightness=true] - Whether to correct lightness in the generated palette.
   * @returns {MoebiusColorValueHexType[]} - Array of hex color values representing the interpolated palette.
   *
   * @example
   * ```ts
   * const startColor = '#3498db';
   * const endColor = '#db3434';
   * const interpolatedPalette = interpolate(startColor, endColor, { numberOfColors: 5 });
   * console.log(interpolatedPalette); // ['#3498db', '#5d6d7e', '#8473a9', '#ad7a95', '#db3434']
   * ```
   */
  interpolate(
    primaryColor: MoebiusColorValueHexType,
    secondaryColor: MoebiusColorValueHexType,
    options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
  ): MoebiusColorValueHexType[] {
    const currentOptions = { ...this.options, ...options };

    return FEATURES.interpolate(primaryColor, secondaryColor, currentOptions);
  }
  /**
   * Generate a luminance shift palette based on an array of colors, with optional diverging colors.
   *
   * @param {MoebiusChromaColorInputType[]} colors - Array of base colors for generating the luminance shift palette.
   * @param {MoebiusChromaColorInputType[]} [divergingColors=[]] - Array of diverging colors.
   * @param {MoebiusPaletteOptionsType} [options={}] - Options for generating the palette.
   *   @param {number} [options.numberOfColors=8] - The total number of colors in the luminance shift palette.
   *   @param {boolean} [options.diverging=false] - Whether to generate a diverging palette.
   *   @param {string} [options.colorScaleMode] - The color scale mode for chroma-js.
   *   @param {boolean} [options.bezier=false] - Whether to use bezier interpolation.
   *   @param {string} [options.divergentColor='#f5f5f5'] - The divergent color for a diverging palette.
   *   @param {boolean} [options.correctLightness=true] - Whether to correct lightness in the generated palette.
   * @returns {MoebiusColorValueHexType[]} - Array of hex color values representing the luminance shift palette.
   *
   * @example
   * ```ts
   * const baseColors = ['#3498db', '#99db34'];
   * const divergingColors = ['#db3434'];
   * const luminanceShiftPalette = luminanceShift(baseColors, divergingColors, { numberOfColors: 5 });
   * console.log(luminanceShiftPalette); // ['#3498db', '#99db34', '#dbd134', '#db3434', '#8f34db']
   * ```
   */
  luminanceShift(
    colors: MoebiusColorValueHexType[],
    divergingColors: MoebiusColorValueHexType[] = [],

    options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
  ): MoebiusColorValueHexType[] {
    const currentOptions = { ...this.options, ...options };

    return FEATURES.luminanceShift(colors, divergingColors, currentOptions);
  }

  /**
   * Generates a monochromatic color palette based on the given color.
   * @param {MoebiusChromaColorInputType} color - The base color for the palette.
   * @param {MoebiusPaletteOptionsType} options - Options for generating the palette.
   * @returns {MoebiusColorValueHexType[]} - An array of hex color values in the palette.
   * @example
   * ```typescript
   * const baseColor = '#003f5c';
   * const options = { numberOfColors: 5, bezier: true, randomOffset: false };
   * const monochromaticPalette = monochromatic(baseColor, options);
   * console.log(monochromaticPalette);
   * [
   *   '#003f5c', // maniacMansion,
   *   '#014268', // darkImperialBlue,
   *   '#024575', // macraggeBlue,
   *   '#044784', // bridgeport,
   *   '#064898', // frightNight,
   *   '#0745b6', // absoluteZero,
   *   '#002df5', // blueBouquet
   * ];
   * ```
   */
  monochromatic(
    color: MoebiusColorValueHexType,
    options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
  ): MoebiusColorValueHexType[] {
    const currentOptions = { ...this.options, ...options };

    return FEATURES.monochromatic(color, currentOptions);
  }
  /**
   * Generate a harmonized color palette based on the input color.
   *
   * @param {MoebiusChromaColorInputType} color - The base color for generating the harmonized palette.
   * @param {number} start - The starting angle for generating harmonized colors (degrees).
   * @param {number} end - The ending angle for generating harmonized colors (degrees).
   * @param {number} interval - The interval between harmonized colors (degrees).
   * @param {MoebiusPaletteOptionsType} [options={}] - Options for generating the palette.
   *   @param {boolean} [options.noDuplicates=true] - Whether to remove duplicate colors in the palette.
   * @returns {MoebiusColorValueHexType[]} - Array of hex color values representing the harmonized palette.
   *
   * @example
   * ```ts
   * const baseColor = '#3498db';
   * const harmonizedPalette = harmonize(baseColor, 30, 210, 30, { noDuplicates: true });
   * console.log(harmonizedPalette); // ['#3498db', '#75db34', '#dbd134', '#db7434', '#3498db']
   * ```
   */
  harmonize(
    color: MoebiusColorValueHexType,
    start: number,
    end: number,
    interval: number,
    options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
  ): MoebiusColorValueHexType[] {
    const currentOptions = { ...this.options, ...options };

    return FEATURES.harmonize(color, start, end, interval, currentOptions);
  }
}
