import { MoebiusLCHObjectType } from '../../types';

/**
 * Represents an OKLCH color unit.
 * @constructor
 * @param {MoebiusLCHObjectType} params - The OKLCH parameters.
 * @property {number} l - Lightness component.
 * @property {number} c - Chroma component.
 * @property {number} h - Hue component.
 */
export const UnitOKLCH = function (this: MoebiusLCHObjectType, [l, c, h]) {
  this.l = Number(l.toFixed(2));
  this.c = Number(c.toFixed(2));
  this.h = Number(!isNaN(h) ? h.toFixed(2) : 0);
};

/**
 * Converts the OKLCH unit to a string representation.
 * @method
 * @returns {string} - The string representation of the OKLCH unit.
 * @example
 * ```ts
 * const oklchUnit = new UnitOKLCH([70, 30, 45]);
 * const oklchString = oklchUnit.toString(); // "70, 30, 45"
 * ```
 */
UnitOKLCH.prototype.toString = function (): string {
  return Object.keys(this)
    .map((a) => `${this[a]}`)
    .join(', ');
};
