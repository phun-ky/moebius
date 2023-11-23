import chroma from 'chroma-js';
import { UnitHSI } from '../color-objects';
import { MoebiusChromaColorInputType, MoebiusHSIObjectType } from '../../types';

/**
 * Converts a color to its corresponding HSI object representation.
 *
 * @param {MoebiusChromaColorInputType} color - The input color in hex format.
 * @returns {MoebiusHSIObjectType} The HSI color representation object.
 *
 * @example
 * ```ts
 * const hsiObject = toHSI('#3498db');
 * console.log(hsiObject); // Output: { h: 207.76, s: 0.52, i: 0.4 }
 * ```
 */
export const toHSI = (
  color: MoebiusChromaColorInputType
): MoebiusHSIObjectType => {
  return new UnitHSI(chroma(color).hsi());
};
