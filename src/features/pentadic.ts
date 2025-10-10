import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusColorValueHexType,
  MoebiusPaletteOptionsType
} from '../types';

import { harmonize } from './harmonize';

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
export const pentadic = (
  color: MoebiusChromaColorInputType,
  options?: MoebiusPaletteOptionsType
): MoebiusColorValueHexType[] => {
  const {
    numberOfColors = 8,
    colorScaleMode = 'rgb',
    correctLightness = true
  } = options || {};
  // Generate a pentadic color scheme.
  const colors = harmonize(color, 144, 360, 72);

  // Use chroma-js to fill in colors for the palette.
  return chroma
    .scale(colors)
    .mode(colorScaleMode)
    .correctLightness(correctLightness)
    .colors(numberOfColors) as MoebiusColorValueHexType[];
};
