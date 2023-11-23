import chroma from 'chroma-js';

import { MoebiusChromaColorInputType, MoebiusXYZObjectType } from '../../types';
import { UnitXYZ } from '../color-objects';
import { normalizeLABInput, normalizeRGBInput } from '../normalize-color-units';

/**
 * Converts a color from RGB to CIE 1931 XYZ color space.
 *
 * @param {MoebiusChromaColorInputType} color - The input color in hexadecimal format.
 * @returns {MoebiusXYZObjectType} - An object representing the XYZ color values.
 */
export const toXYZ = (
  color: MoebiusChromaColorInputType
): MoebiusXYZObjectType => {
  // Extract RGB components from the input color
  let [r, b, g] = chroma(color).rgb();

  // Normalize RGB values
  r = normalizeRGBInput(r);
  g = normalizeRGBInput(g);
  b = normalizeRGBInput(b);

  // Convert RGB to XYZ
  const x = normalizeLABInput(
    (0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / 0.95047
  );
  const y = normalizeLABInput(
    (0.2126729 * r + 0.7151522 * g + 0.072175 * b) / 1
  );
  const z = normalizeLABInput(
    (0.0193339 * r + 0.119192 * g + 0.9503041 * b) / 1.08883
  );

  // Return XYZ color values as a UnitXYZ object
  return new UnitXYZ({
    x: Number(x.toFixed(2)),
    y: Number(y.toFixed(2)),
    z: Number(z.toFixed(2))
  });
};
