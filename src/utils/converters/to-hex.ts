import chroma from 'chroma-js';
import {
  MoebiusChromaColorInputType,
  MoebiusColorValueHexType
} from '../../types';

/**
 * Converts a color to its corresponding HEX representation.
 *
 * @param {MoebiusChromaColorInputType} color - The input color in various formats (HEX, RGB, HSL, etc.).
 * @returns {MoebiusColorValueHexType} The HEX representation of the color.
 *
 * @example
 * ```ts
 * const hexColor = toHEX('#3498db');
 * console.log(hexColor); // Output: '#3498db'
 * ```
 */
export const toHEX = (
  color: MoebiusChromaColorInputType
): MoebiusColorValueHexType => {
  return chroma(color).hex();
};
