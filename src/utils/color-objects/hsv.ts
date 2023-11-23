import { MoebiusHSVObjectType } from '../../types';

/**
 * Represents an HSV (Hue, Saturation, Value) color unit.
 * @constructor
 * @param {MoebiusHSVObjectType} params - The HSV parameters.
 * @property {number} h - Hue component.
 * @property {number} s - Saturation component.
 * @property {number} v - Value component.
 */
export const UnitHSV = function (this: MoebiusHSVObjectType, [h, s, v]) {
  // Ensure the values are within valid ranges and convert them to numbers.
  this.h = Number(!isNaN(h) ? h.toFixed(2) : 0);
  this.s = Number(s.toFixed(2));
  this.v = Number(v.toFixed(2));
};

/**
 * Converts the HSV unit to a string representation.
 * @method
 * @returns {string} - The string representation of the HSV unit.
 * @example
 * ```ts
 * const hsvUnit = new UnitHSV([30, 0.5, 0.8]);
 * const hsvString = hsvUnit.toString(); // "30, 0.50, 0.80"
 * ```
 */
UnitHSV.prototype.toString = function (): string {
  return Object.keys(this)
    .map((a) => `${this[a]}`)
    .join(', ');
};
