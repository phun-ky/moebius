import chroma from 'chroma-js';
import { MoebiusChromaColorInputType, MoebiusLCHObjectType } from '../../types';
import { UnitLCH } from '../color-objects';

/**
 * Converts a color to its corresponding LCH object representation.
 *
 * @param {MoebiusChromaColorInputType} color - The input color in hex format.
 * @returns {MoebiusLCHObjectType} The LCH color representation object.
 *
 * @example
 * ```ts
 * const lchObject = toLCH('#3498db');
 * console.log(lchObject); // Output: { l: 54.66, c: 76.91, h: 217.76 }
 * ```
 */
export const toLCH = (
  color: MoebiusChromaColorInputType
): MoebiusLCHObjectType => {
  return new UnitLCH(chroma(color).lch());
};
