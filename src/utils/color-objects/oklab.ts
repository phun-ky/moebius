import { MoebiusLABObjectType } from '../../types';

/**
 * Represents an OKLAB color unit.
 * @constructor
 * @param {MoebiusLABObjectType} params - The OKLAB parameters.
 * @property {number} l - Lightness component.
 * @property {number} a - First color opponent axis.
 * @property {number} b - Second color opponent axis.
 */
export const UnitOKLAB = function (this: MoebiusLABObjectType, [l, a, b]) {
  this.l = Number(l.toFixed(2));
  this.a = Number(a.toFixed(2));
  this.b = Number(b.toFixed(2));
};

/**
 * Converts the OKLAB unit to a string representation.
 * @method
 * @returns {string} - The string representation of the OKLAB unit.
 * @example
 * ```ts
 * const oklabUnit = new UnitOKLAB([70, 30, 45]);
 * const oklabString = oklabUnit.toString(); // "70, 30, 45"
 * ```
 */
UnitOKLAB.prototype.toString = function (): string {
  return Object.keys(this)
    .map((a) => `${this[a]}`)
    .join(', ');
};
