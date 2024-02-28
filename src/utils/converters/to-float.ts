import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusHSLObjectType,
  MoebiusRGBObjectType
} from '../../types';
import { UnitHSLFloat } from '../color-objects/hsl';
import { UnitRGBFloat } from '../color-objects/rgb';

/**
 * Converts a color to its float representation.
 * @param {MoebiusChromaColorInputType} color - The input color in hex, rgb, or rgba format.
 * @param {string} [type] - The color type ('hsl' for HSL, undefined for RGB).
 * @returns {UnitHSLFloat | UnitRGBFloat} - The float representation of the color.
 * @example
 * ```ts
 * const hslFloatColor = toFloat('#00ff00', 'hsl');
 * console.log(hslFloatColor.toString()); // 120, 100, 50
 * ```
 * @example
 * ```ts
 * const rgbFloatColor = toFloat('#00ff00');
 * console.log(rgbFloatColor.toString()); // 0, 1, 0
 * ```
 */
export const toFloat = (
  color: MoebiusChromaColorInputType,
  type?: string
): MoebiusHSLObjectType | MoebiusRGBObjectType => {
  if (type === 'hsl') {
    // Convert the color to HSL and create a new HSL float unit
    return new UnitHSLFloat(chroma(color).hsl());
  }

  // Convert the color to RGB and create a new RGB float unit
  const _rgb = chroma(color).rgb();
  const rgbFloat = new UnitRGBFloat({
    r: Number((_rgb[0] / 255).toFixed(2)),
    g: Number((_rgb[1] / 255).toFixed(2)),
    b: Number((_rgb[2] / 255).toFixed(2))
  });

  return rgbFloat;
};
