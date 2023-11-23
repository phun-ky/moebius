import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusColorValueHexType,
  MoebiusPaletteOptionsType
} from '../types';

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
export const interpolate = (
  primaryColor: MoebiusChromaColorInputType,
  secondaryColor: MoebiusChromaColorInputType,
  options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
): MoebiusColorValueHexType[] => {
  const {
    numberOfColors = 8,
    colorScaleMode,
    bezier = false,
    correctLightness = true
  } = options as MoebiusPaletteOptionsType;

  let colors = chroma
    .scale([primaryColor, secondaryColor])
    .mode(colorScaleMode)
    .correctLightness(correctLightness)
    .colors(numberOfColors);

  if (bezier) {
    colors = chroma
      .bezier([primaryColor, secondaryColor])
      .scale()
      .mode(colorScaleMode)
      .correctLightness(correctLightness)
      .colors(numberOfColors);
  }

  return colors;
};
