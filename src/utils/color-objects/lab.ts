import { MoebiusLABObjectType } from '../../types';

/**
 * Represents an LAB (CIELAB) color unit.
 * @constructor
 * @param {MoebiusLABObjectType} params - The LAB parameters.
 * @property {number} l - Lightness component.
 * @property {number} a - A color component.
 * @property {number} b - B color component.
 */
export const UnitLAB = function (this: MoebiusLABObjectType, [l, a, b]) {
  this.l = Number(l.toFixed(2));
  this.a = Number(a.toFixed(2));
  this.b = Number(b.toFixed(2));
};

/**
 * Converts the LAB unit to a string representation.
 * @method
 * @returns {string} - The string representation of the LAB unit.
 * @example
 * ```ts
 * const labUnit = new UnitLAB([70, 10, 20]);
 * const labString = labUnit.toString(); // "70, 10, 20"
 * ```
 */
UnitLAB.prototype.toString = function (): string {
  return Object.keys(this)
    .map((a) => `${this[a]}`)
    .join(', ');
};
