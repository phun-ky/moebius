import chroma from 'chroma-js';

import { MoebiusChromaColorInputType, MoebiusLABObjectType } from '../../types';
import { UnitOKLAB } from '../color-objects';

/**
 * Converts a color to its OKLAB representation.
 *
 * @param {MoebiusChromaColorInputType} color - The input color in hex format.
 * @returns {MoebiusLABObjectType} The OKLAB representation of the input color.
 *
 * @example
 * ```ts
 * const oklabColor = toOKLAB('#3498db');
 * console.log(oklabColor); // Output: { l: 52.42, a: -9.93, b: -39.49 }
 * ```
 */
export const toOKLAB = (
  color: MoebiusChromaColorInputType
): MoebiusLABObjectType => {
  return new UnitOKLAB(chroma(color).oklab());
};
