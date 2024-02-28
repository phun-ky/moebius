import chroma from 'chroma-js';

import { MoebiusChromaColorInputType, MoebiusHSVObjectType } from '../../types';
import { UnitHSV } from '../color-objects';

/**
 * Converts a color to its corresponding HSV object representation.
 *
 * @param {MoebiusChromaColorInputType} color - The input color in hex format.
 * @returns {MoebiusHSVObjectType} The HSV color representation object.
 *
 * @example
 * ```ts
 * const hsvObject = toHSV('#3498db');
 * console.log(hsvObject); // Output: { h: 207.76, s: 0.86, v: 0.85 }
 * ```
 */
export const toHSV = (
  color: MoebiusChromaColorInputType
): MoebiusHSVObjectType => {
  return new UnitHSV(chroma(color).hsv());
};
