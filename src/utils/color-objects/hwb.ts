import { MoebiusHWBObjectType } from '../../types';

/**
 * Represents an HWB (Hue, Whiteness, Blackness) color unit.
 * @constructor
 * @param {MoebiusHWBObjectType} params - The HWB parameters.
 * @property {number} h - Hue component.
 * @property {number} w - Whiteness component.
 * @property {number} b - Blackness component.
 */
export const UnitHWB = function (this: MoebiusHWBObjectType, { h, w, b }) {
  this.h = h;
  this.w = w;
  this.b = b;
};

/**
 * Converts the HWB unit to a string representation.
 * @method
 * @returns {string} - The string representation of the HWB unit.
 * @example
 * ```ts
 * const hwbUnit = new UnitHWB({ h: 200, w: 0.2, b: 0.1 });
 * const hwbString = hwbUnit.toString(); // "200, 0.2, 0.1"
 * ```
 */
UnitHWB.prototype.toString = function (): string {
  return Object.keys(this)
    .map((a) => `${this[a]}`)
    .join(', ');
};
