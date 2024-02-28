import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusColorValueHexType,
  MoebiusPaletteOptionsType
} from '../types';

import { harmonize } from './harmonize';

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
export const triadic = (
  color: MoebiusChromaColorInputType,
  options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
): MoebiusColorValueHexType[] => {
  const {
    numberOfColors = 8,
    colorScaleMode,
    correctLightness = true
  } = options;
  const colors = harmonize(color, 120, 240, 120);

  return chroma
    .scale(colors)
    .mode(colorScaleMode)
    .correctLightness(correctLightness)
    .colors(numberOfColors);
};
