import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusColorValueHexType,
  MoebiusPaletteOptionsType
} from '../types';

import { harmonize } from './harmonize';

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
export const hexadic = (
  color: MoebiusChromaColorInputType,
  options?: MoebiusPaletteOptionsType
): MoebiusColorValueHexType[] => {
  const {
    numberOfColors = 8,
    colorScaleMode = 'rgb',
    correctLightness = true
  } = options || {};
  // Generate a hexadic color scheme.
  const colors = harmonize(color, 120, 360, 60);

  // Use chroma-js to fill in missing colors for the palette.
  return chroma
    .scale(colors)
    .mode(colorScaleMode)
    .correctLightness(correctLightness)
    .colors(numberOfColors) as MoebiusColorValueHexType[];
};
