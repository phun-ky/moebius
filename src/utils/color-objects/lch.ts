import { MoebiusLCHObjectType } from '../../types';

/**
 * Represents an LCH (CIELCH) color unit.
 * @constructor
 * @param {MoebiusLCHObjectType} params - The LCH parameters.
 * @property {number} l - Lightness component.
 * @property {number} c - Chroma component.
 * @property {number} h - Hue component.
 */
export const UnitLCH = function (this: MoebiusLCHObjectType, [l, c, h]) {
  this.l = Number(l.toFixed(2));
  this.c = Number(c.toFixed(2));
  this.h = Number(!isNaN(h) ? h.toFixed(2) : 0);
};

/**
 * Converts the LCH unit to a string representation.
 * @method
 * @returns {string} - The string representation of the LCH unit.
 * @example
 * ```ts
 * const lchUnit = new UnitLCH([70, 30, 45]);
 * const lchString = lchUnit.toString(); // "70, 30, 45"
 * ```
 */
UnitLCH.prototype.toString = function (): string {
  return Object.keys(this)
    .map((a) => `${this[a]}`)
    .join(', ');
};
