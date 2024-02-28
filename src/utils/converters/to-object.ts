import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusHSLObjectType,
  MoebiusRGBObjectType
} from '../../types';

/**
 * Converts a color to its corresponding object representation.
 *
 * @param {MoebiusChromaColorInputType} color - The input color in hex format.
 * @param {string} [type] - The type of representation ('hsl' or undefined for RGB).
 * @returns {MoebiusRGBObjectType | MoebiusHSLObjectType} The color representation object.
 *
 * @example
 * ```ts
 * const rgbObject = toObject('#3498db');
 * console.log(rgbObject); // Output: { r: 52, g: 152, b: 219 }
 *
 * const hslObject = toObject('#3498db', 'hsl');
 * console.log(hslObject); // Output: { h: 207, s: 79, l: 57 }
 * ```
 */
export const toObject = (
  color: MoebiusChromaColorInputType,
  type?: string
): MoebiusRGBObjectType | MoebiusHSLObjectType => {
  if (type === 'hsl') {
    const [h, s, l] = chroma(color).hsl();

    return {
      h: Number(!isNaN(h) ? h.toFixed(0) : 0),
      s: Number((s * 100).toFixed()),
      l: Number((l * 100).toFixed())
    };
  }

  const rgb = chroma(color).rgb();
  const rgbObject = {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2]
  };

  return rgbObject;
};
