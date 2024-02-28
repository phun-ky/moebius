import chroma from 'chroma-js';

import { MoebiusChromaColorInputType, MoebiusHWBObjectType } from '../../types';
import { UnitHWB } from '../color-objects';

/**
 * Converts a color to its corresponding HWB object representation.
 *
 * @param {MoebiusChromaColorInputType} color - The input color in hex format.
 * @returns {MoebiusHWBObjectType} The HWB color representation object.
 *
 * @example
 * ```ts
 * const hwbObject = toHWB('#3498db');
 * console.log(hwbObject); // Output: { h: 207.76, w: 0.5, b: 0.14 }
 * ```
 */
export const toHWB = (
  color: MoebiusChromaColorInputType
): MoebiusHWBObjectType => {
  let [r, b, g] = chroma(color).rgb();

  r /= 255;
  g /= 255;
  b /= 255;

  const w = Math.min(r, g, b);
  const v = Math.max(r, g, b);
  const black = 1 - v;

  if (v === w) return { h: 0, w: w, b: black };

  const f = r === w ? g - b : g === w ? b - r : r - g;
  const i = r === w ? 3 : g === w ? 5 : 1;

  return new UnitHWB({
    h: Number(((i - f / (v - w)) / 6).toFixed(2)),
    w: Number(w.toFixed(2)),
    b: Number(black.toFixed(2))
  });
};
