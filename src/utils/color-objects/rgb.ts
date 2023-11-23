import { MoebiusRGBObjectType } from '../../types';

/**
 * Represents an RGB float color unit.
 * @constructor
 * @param {MoebiusRGBObjectType} params - The RGB float parameters.
 * @property {number} r - Red component.
 * @property {number} g - Green component.
 * @property {number} b - Blue component.
 */
export const UnitRGBFloat = function (this: MoebiusRGBObjectType, { r, g, b }) {
  this.r = r;
  this.g = g;
  this.b = b;
};

/**
 * Converts the RGB float unit to a string representation.
 * @method
 * @returns {string} - The string representation of the RGB float unit.
 * @example
 * ```ts
 * const rgbFloatUnit = new UnitRGBFloat({ r: 255, g: 128, b: 0 });
 * const rgbFloatString = rgbFloatUnit.toString(); // "255, 128, 0"
 * ```
 */
UnitRGBFloat.prototype.toString = function (): string {
  return Object.keys(this)
    .map((a) => `${this[a]}`)
    .join(', ');
};
