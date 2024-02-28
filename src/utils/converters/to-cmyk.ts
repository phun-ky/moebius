import chroma from 'chroma-js';

import {
  MoebiusCMYKObjectType,
  MoebiusChromaColorInputType
} from '../../types';
import { UnitCMYK } from '../color-objects';

/**
 * Converts an RGB color to its CMYK representation.
 * @param {MoebiusChromaColorInputType} color - The input color in hex, rgb, or rgba format.
 * @returns {MoebiusCMYKObjectType} - The CMYK representation of the color.
 * @example
 * ```ts
 * const cmykColor = toCMYK('#00ff00');
 * console.log(cmykColor); // { c: 40, m: 0, y: 100, k: 0 }
 * ```
 */
export const toCMYK = (
  color: MoebiusChromaColorInputType
): MoebiusCMYKObjectType => {
  // Convert the color to RGB components
  let [r, b, g] = chroma(color).rgb();

  // Normalize RGB values to the range [0, 1]
  r /= 255;
  g /= 255;
  b /= 255;

  // Calculate the CMYK components
  const k = +(1 - Math.max(r, g, b));
  const c = +((1 - r - k) / (1 - k) || 0);
  const m = +((1 - g - k) / (1 - k) || 0);
  const y = +((1 - b - k) / (1 - k) || 0);

  // Create a new CMYK unit
  return new UnitCMYK({
    c: Number((c * 100).toFixed()),
    m: Number((m * 100).toFixed()),
    y: Number((y * 100).toFixed()),
    k: Number((k * 100).toFixed())
  });
};
