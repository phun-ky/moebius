import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusColorValueHexType,
  MoebiusPaletteOptionsType
} from '../types';

import { harmonize } from './harmonize';

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
export const analogous = (
  color: MoebiusChromaColorInputType,
  options?: MoebiusPaletteOptionsType
): MoebiusColorValueHexType[] => {
  const {
    numberOfColors = 8,
    colorScaleMode = 'rgb',
    correctLightness = true
  } = options || {};
  // Generate an analogous color scheme.
  const colors = harmonize(color, 30, 90, 30);

  // Use chroma-js to fill in the missing colors for the palette.
  return chroma
    .scale(colors)
    .mode(colorScaleMode)
    .correctLightness(correctLightness)
    .colors(numberOfColors) as MoebiusColorValueHexType[];
};
