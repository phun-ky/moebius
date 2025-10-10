import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusColorValueHexType,
  MoebiusPaletteOptionsType
} from '../types';

import { harmonize } from './harmonize';

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
export const tetradic = (
  color: MoebiusChromaColorInputType,
  options?: MoebiusPaletteOptionsType
): MoebiusColorValueHexType[] => {
  const {
    numberOfColors = 8,
    colorScaleMode = 'rgb',
    correctLightness = true
  } = options || {};
  // Generate a tetradic color scheme.
  const colors = harmonize(color, 90, 270, 90);

  // Use chroma-js to fill in the missing colors for the palette.
  return chroma
    .scale(colors)
    .mode(colorScaleMode)
    .correctLightness(correctLightness)
    .colors(numberOfColors) as MoebiusColorValueHexType[];
};
