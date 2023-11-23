import { MoebiusHSLObjectType } from '../../types';

/**
 * Represents an HSL (Hue, Saturation, Lightness) color unit.
 * @constructor
 * @param {MoebiusHSLObjectType} params - The HSL parameters.
 * @property {number} h - Hue component.
 * @property {number} s - Saturation component.
 * @property {number} l - Lightness component.
 */
export const unitHSL = function (this: MoebiusHSLObjectType, [h, s, l]) {
  // Ensure the values are within valid ranges and convert them to numbers.
  this.h = Number(!isNaN(h) ? h.toFixed(0) : 0);
  this.s = Number((s * 100).toFixed());
  this.l = Number((l * 100).toFixed());
};

/**
 * Converts the HSL unit to a string representation.
 * @method
 * @returns {string} - The string representation of the HSL unit.
 * @example
 * ```ts
 * const hslUnit = new unitHSL([30, 0.5, 0.8]);
 * const hslString = hslUnit.toString(); // "hsl(30, 50%, 80%)"
 * ```
 */
unitHSL.prototype.toString = function (): string {
  return `hsl(${Object.keys(this)
    .map((a, i) => `${this[a]}${i !== 0 ? '%' : ''}`)
    .join(', ')})`;
};

/**
 * Represents an HSL (Hue, Saturation, Lightness) color unit with floating-point values.
 * @constructor
 * @param {MoebiusHSLObjectType} params - The HSL parameters.
 * @property {number} h - Hue component.
 * @property {number} s - Saturation component.
 * @property {number} l - Lightness component.
 */
export const unitHSLFloat = function (this: MoebiusHSLObjectType, [h, s, l]) {
  // Ensure the values are within valid ranges and convert them to numbers.
  this.h = Number(!isNaN(h) ? h.toFixed(0) : 0);
  this.s = Number(s.toFixed(2));
  this.l = Number(l.toFixed(2));
};

/**
 * Converts the HSL unit with floating-point values to a string representation.
 * @method
 * @returns {string} - The string representation of the HSL unit with floating-point values.
 * @example
 * ```ts
 * const hslFloatUnit = new unitHSLFloat([30, 0.5, 0.8]);
 * const hslFloatString = hslFloatUnit.toString(); // "30, 0.50, 0.80"
 * ```
 */
unitHSLFloat.prototype.toString = function (): string {
  return Object.keys(this)
    .map((a) => `${this[a]}`)
    .join(', ');
};
