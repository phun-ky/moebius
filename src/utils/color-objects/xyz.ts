/**
 * Represents an XYZ color unit.
 */
export class UnitXYZ {
  /** X component */
  x: number;
  /** Y component */
  y: number;
  /** Z component */
  z: number;

  /**
   * Create a new UnitXYZ instance.
   * @param {{ x: number, y: number, z: number }} components - The XYZ components.
   */
  constructor({ x, y, z }: { x: number; y: number; z: number }) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * Converts the XYZ unit to a string representation.
   * @returns {string} - The string representation of the XYZ unit.
   * @example
   * ```ts
   * const xyzUnit = new UnitXYZ({ x: 0.4, y: 0.6, z: 0.8 });
   * const xyzString = xyzUnit.toString(); // "0.4, 0.6, 0.8"
   * ```
   */
  toString(): string {
    return `${this.x}, ${this.y}, ${this.z}`;
  }
}
