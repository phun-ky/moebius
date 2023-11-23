import { MoebiusHSIObjectType } from '../../types';

/**
 * Represents an HSI (Hue, Saturation, Intensity) color unit.
 * @constructor
 * @param {MoebiusHSIObjectType} params - The HSI parameters.
 * @property {number} h - Hue component.
 * @property {number} s - Saturation component.
 * @property {number} i - Intensity component.
 */
export const UnitHSI = function (this: MoebiusHSIObjectType, [h, s, i]) {
  // Ensure the values are within valid ranges and convert them to numbers.
  this.h = Number(!isNaN(h) ? h.toFixed(2) : 0);
  this.s = Number(s.toFixed(2));
  this.i = Number(i.toFixed(2));
};

/**
 * Converts the HSI unit to a string representation.
 * @method
 * @returns {string} - The string representation of the HSI unit.
 * @example
 * ```ts
 * const hsiUnit = new UnitHSI([30, 0.5, 0.8]);
 * const hsiString = hsiUnit.toString(); // "30, 0.5, 0.8"
 * ```
 */
UnitHSI.prototype.toString = function (): string {
  return Object.keys(this)
    .map((a) => `${this[a]}`)
    .join(', ');
};
