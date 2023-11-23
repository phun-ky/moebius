import { MoebiusCMYKObjectType } from '../../types';

/**
 * Represents a CMYK color unit.
 * @constructor
 * @param {MoebiusCMYKObjectType} params - The CMYK parameters.
 * @property {number} c - Cyan component.
 * @property {number} m - Magenta component.
 * @property {number} y - Yellow component.
 * @property {number} k - Black (Key) component.
 */
export const UnitCMYK = function (this: MoebiusCMYKObjectType, { c, m, y, k }) {
  this.c = c;
  this.m = m;
  this.y = y;
  this.k = k;
};

/**
 * Converts the CMYK unit to a string representation.
 * @method
 * @returns {string} - The string representation of the CMYK unit.
 * @example
 * ```ts
 * const cmykUnit = new UnitCMYK({ c: 0.2, m: 0.4, y: 0.6, k: 0.1 });
 * const cmykString = cmykUnit.toString(); // "0.2, 0.4, 0.6, 0.1"
 * ```
 */
UnitCMYK.prototype.toString = function (): string {
  return Object.keys(this)
    .map((a) => `${this[a]}`)
    .join(', ');
};
