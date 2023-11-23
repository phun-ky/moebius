import { MoebiusXYZObjectType } from '../../types';

/**
 * Represents an XYZ color unit.
 * @constructor
 * @param {MoebiusXYZObjectType} params - The XYZ parameters.
 * @property {number} x - X component.
 * @property {number} y - Y component.
 * @property {number} z - Z component.
 */
export const UnitXYZ = function (this: MoebiusXYZObjectType, { x, y, z }) {
  this.x = x;
  this.y = y;
  this.z = z;
};

/**
 * Converts the XYZ unit to a string representation.
 * @method
 * @returns {string} - The string representation of the XYZ unit.
 * @example
 * ```ts
 * const xyzUnit = new UnitXYZ({ x: 0.4, y: 0.6, z: 0.8 });
 * const xyzString = xyzUnit.toString(); // "0.4, 0.6, 0.8"
 * ```
 */
UnitXYZ.prototype.toString = function (): string {
  return Object.keys(this)
    .map((a) => `${this[a]}`)
    .join(', ');
};
