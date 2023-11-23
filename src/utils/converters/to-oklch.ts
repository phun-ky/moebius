import chroma from 'chroma-js';
import { MoebiusChromaColorInputType, MoebiusLCHObjectType } from '../../types';
import { UnitOKLCH } from '../color-objects';

/**
 * Converts a color to its OKLCH representation.
 *
 * @param {MoebiusChromaColorInputType} color - The input color in hex format.
 * @returns {MoebiusLCHObjectType} The OKLCH representation of the input color.
 *
 * @example
 * ```ts
 * const oklchColor = toOKLCH('#3498db');
 * console.log(oklchColor); // Output: { l: 52.12, c: 126.62, h: 232.53 }
 * ```
 */
export const toOKLCH = (
  color: MoebiusChromaColorInputType
): MoebiusLCHObjectType => {
  return new UnitOKLCH(chroma(color).oklch());
};
