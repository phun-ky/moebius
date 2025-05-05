/**
 * Represents an OKLAB color unit.
 */
export class UnitOKLAB {
  /** Lightness component */
  l: number;
  /** First color opponent axis */
  a: number;
  /** Second color opponent axis */
  b: number;

  /**
   * Create a new UnitOKLAB instance.
   * @param {[number, number, number]} components - The OKLAB components [l, a, b].
   */
  constructor([l, a, b]: [number, number, number]) {
    this.l = Number(l.toFixed(2));
    this.a = Number(a.toFixed(2));
    this.b = Number(b.toFixed(2));
  }

  /**
   * Converts the OKLAB unit to a string representation.
   * @returns {string} - The string representation of the OKLAB unit.
   * @example
   * ```ts
   * const oklabUnit = new UnitOKLAB([70, 30, 45]);
   * const oklabString = oklabUnit.toString(); // "70, 30, 45"
   * ```
   */
  toString(): string {
    return `${this.l}, ${this.a}, ${this.b}`;
  }
}
