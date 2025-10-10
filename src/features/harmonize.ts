import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusColorValueHexType,
  MoebiusPaletteOptionsType
} from '../types';

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
export const harmonize = (
  color: MoebiusChromaColorInputType,
  start: number,
  end: number,
  interval: number,
  options?: MoebiusPaletteOptionsType
): MoebiusColorValueHexType[] => {
  const { noDuplicates = true } = options || {};
  // Initialize the array with the base color.
  const colors = [chroma(color).hex() as MoebiusColorValueHexType];

  // Convert the HSL color to an object for easy manipulation.
  let [h, s, l] = chroma(color).hsl();

  if (isNaN(h)) {
    h = 0;
  }

  s = Number((s * 100).toFixed());
  l = Number((l * 100).toFixed());

  // Generate harmonized colors within the specified range.
  for (let i = start; i <= end; i += interval) {
    // Calculate the adjusted hue.
    const h1 = Number(((h + i) % 360).toFixed());

    // Create the harmonized color in HSL format and add it to the array.
    colors.push(
      chroma(`hsl(${h1}, ${s}%, ${l}%)`).hex() as MoebiusColorValueHexType
    );
  }

  let uniqueColors = colors;

  if (noDuplicates) {
    uniqueColors = [...new Set(colors)];
  }

  return uniqueColors;
};
