import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusColorValueRgbType
} from '../../types';

/**
 * Converts a color to its RGB representation.
 *
 * @param {MoebiusChromaColorInputType} color - The input color in any valid chroma-js format.
 * @returns {MoebiusColorValueRgbType} The RGB representation of the input color.
 *
 * @example
 * ```ts
 * const rgbColor = toRGB('#3498db');
 * console.log(rgbColor); // Output: 'rgb(52, 152, 219)'
 * ```
 */
export const toRGB = (
  color: MoebiusChromaColorInputType
): MoebiusColorValueRgbType => {
  const [r, g, b] = chroma(color).rgb();

  return `rgb(${r}, ${g}, ${b})`;
};
