import chroma from 'chroma-js';
import { MoebiusChromaColorInputType, MoebiusLABObjectType } from '../../types';
import { UnitLAB } from '../color-objects';

/**
 * Converts a color to its corresponding LAB object representation.
 *
 * @param {MoebiusChromaColorInputType} color - The input color in hex format.
 * @returns {MoebiusLABObjectType} The LAB color representation object.
 *
 * @example
 * ```ts
 * const labObject = toLAB('#3498db');
 * console.log(labObject); // Output: { l: 54.24, a: -12.56, b: -43.81 }
 * ```
 */
export const toLAB = (
  color: MoebiusChromaColorInputType
): MoebiusLABObjectType => {
  return new UnitLAB(chroma(color).lab());
};
