import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusColorValueHexType,
  MoebiusPaletteOptionsType
} from '../types';

import { harmonize } from './harmonize';

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
export const split = (
  color: MoebiusChromaColorInputType,
  options?: MoebiusPaletteOptionsType
): MoebiusColorValueHexType[] => {
  const {
    numberOfColors = 8,
    colorScaleMode = 'rgb',
    correctLightness = true
  } = options || {};
  // Generate a split color scheme.
  const colors = harmonize(color, 150, 210, 60);

  // Use chroma-js to fill in the missing colors for the palette.
  return chroma
    .scale(colors)
    .mode(colorScaleMode)
    .correctLightness(correctLightness)
    .colors(numberOfColors) as MoebiusColorValueHexType[];
};
