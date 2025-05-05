/**
 * Normalizes an RGB input value.
 * @param {number} r - The input value in the RGB color space (0 to 255).
 * @returns {number} - The normalized value.
 */
export const normalizeRGBInput = (r: number): number => {
  if ((r /= 255) <= 0.04045) return r / 12.92;

  return Math.pow((r + 0.055) / 1.055, 2.4);
};

/**
 * Normalizes a LAB input value.
 * @param {number} t - The input value in the LAB color space.
 * @returns {number} - The normalized value.
 */
export const normalizeLABInput = (t: number): number => {
  if (t > 0.008856452) return Math.pow(t, 1 / 3);

  return t / 0.12841855 + 0.137931034;
};
