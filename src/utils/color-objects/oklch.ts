/**
 * Represents an OKLCH color unit.
 */
export class UnitOKLCH {
  /** Lightness component */
  l: number;
  /** Chroma component */
  c: number;
  /** Hue component */
  h: number;

  /**
   * Create a new UnitOKLCH instance.
   * @param {[number, number, number]} components - The OKLCH components: [l, c, h]
   */
  constructor([l, c, h]: [number, number, number]) {
    this.l = Number(l.toFixed(2));
    this.c = Number(c.toFixed(2));
    this.h = Number(!isNaN(h) ? h.toFixed(2) : '0');
  }

  /**
   * Converts the OKLCH unit to a string representation.
   * @returns {string} - The string representation of the OKLCH unit.
   * @example
   * ```ts
   * const oklchUnit = new UnitOKLCH([70, 30, 45]);
   * const oklchString = oklchUnit.toString(); // "70.00, 30.00, 45.00"
   * ```
   */
  toString(): string {
    return `${this.l}, ${this.c}, ${this.h}`;
  }
}
