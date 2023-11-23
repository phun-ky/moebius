import chroma from 'chroma-js';

import { MoebiusChromaColorInputType, MoebiusHSLObjectType } from '../../types';
import { unitHSL } from '../color-objects';

/**
 * Converts a color to its corresponding HSL object representation.
 *
 * @param {MoebiusChromaColorInputType} color - The input color in hex format.
 * @returns {MoebiusHSLObjectType} The HSL color representation object.
 *
 * @example
 * ```ts
 * const hslObject = toHSL('#3498db');
 * console.log(hslObject); // Output: { h: 207.76, s: 0.86, l: 0.56 }
 * ```
 */
export const toHSL = (
  color: MoebiusChromaColorInputType
): MoebiusHSLObjectType => {
  return new unitHSL(chroma(color).hsl());
};
