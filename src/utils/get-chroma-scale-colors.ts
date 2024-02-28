import chroma from 'chroma-js';
import { MoebiusColorValueHexType, MoebiusPaletteOptionsType } from 'types';

/**
 * Generates a color scale using Chroma.js.
 * @param {MoebiusColorValueHexType[]} colors - The input colors for the color scale.
 * @param {Record<string, unknown> | MoebiusPaletteOptionsType} [options={}] - Options for generating the color scale.
 * @param {number} [options.numberOfColors=8] - The number of colors in the resulting scale.
 * @param {string} [options.colorScaleMode] - The color scale mode for Chroma.js.
 * @param {boolean} [options.correctLightness=true] - Whether to correct lightness in the color scale.
 * @returns {MoebiusColorValueHexType[]} - The generated color scale.
 * @example
 * ```ts
 * const inputColors = ['#3498db', '#2ecc71', '#e74c3c'];
 * const options = { numberOfColors: 5, colorScaleMode: 'lch', correctLightness: false };
 * const scaleColors = getChromaScaleColors(inputColors, options);
 * console.log(scaleColors);
 * ```
 */
export const getChromaScaleColors = (
  colors: MoebiusColorValueHexType[],
  options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
) => {
  const {
    numberOfColors = 8,
    colorScaleMode,
    correctLightness = true
  } = options as MoebiusPaletteOptionsType;

  try{
    return chroma
      .scale(colors)
      .mode(colorScaleMode)
      .correctLightness(correctLightness)
      .colors(numberOfColors);
  } catch{
    return [];
  }
};
