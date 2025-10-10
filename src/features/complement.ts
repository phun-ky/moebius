import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusColorValueHexType,
  MoebiusPaletteOptionsType
} from '../types';

import { harmonize } from './harmonize';

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
export const complement = (
  color: MoebiusChromaColorInputType,
  options?: MoebiusPaletteOptionsType
): MoebiusColorValueHexType[] => {
  const {
    numberOfColors = 8,
    colorScaleMode = 'rgb',
    correctLightness = true
  } = options || {};
  // Generate a complement color scheme.
  const colors = harmonize(color, 180, 180, 1);

  // Use chroma-js to fill in missing colors for the palette.
  return chroma
    .scale(colors)
    .mode(colorScaleMode)
    .correctLightness(correctLightness)
    .colors(numberOfColors) as MoebiusColorValueHexType[];
};
