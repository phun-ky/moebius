/**
 * Represents a LAB (CIELAB) color unit.
 */
export class UnitLAB {
  /** Lightness component */
  l: number;
  /** A color component */
  a: number;
  /** B color component */
  b: number;

  /**
   * Create a new UnitLAB instance.
   * @param {[number, number, number]} components - The LAB components: [l, a, b]
   */
  constructor([l, a, b]: [number, number, number]) {
    this.l = Number(l.toFixed(2));
    this.a = Number(a.toFixed(2));
    this.b = Number(b.toFixed(2));
  }

  /**
   * Converts the LAB unit to a string representation.
   * @returns {string} - The string representation of the LAB unit.
   * @example
   * ```ts
   * const labUnit = new UnitLAB([70, 10, 20]);
   * const labString = labUnit.toString(); // "70, 10, 20"
   * ```
   */
  toString(): string {
    return `${this.l}, ${this.a}, ${this.b}`;
  }
}
