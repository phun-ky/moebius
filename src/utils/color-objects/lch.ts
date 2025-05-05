/**
 * Represents an LCH (CIELCH) color unit.
 */
export class UnitLCH {
  /** Lightness component */
  l: number;
  /** Chroma component */
  c: number;
  /** Hue component */
  h: number;

  /**
   * Create a new UnitLCH instance.
   * @param {[number, number, number]} components - The LCH components: [l, c, h]
   */
  constructor([l, c, h]: [number, number, number]) {
    this.l = Number(l.toFixed(2));
    this.c = Number(c.toFixed(2));
    this.h = Number(!isNaN(h) ? h.toFixed(2) : '0');
  }

  /**
   * Converts the LCH unit to a string representation.
   * @returns {string} - A string like `"70.00, 30.00, 45.00"`
   * @example
   * ```ts
   * const lchUnit = new UnitLCH([70, 30, 45]);
   * const lchString = lchUnit.toString(); // "70.00, 30.00, 45.00"
   * ```
   */
  toString(): string {
    return `${this.l}, ${this.c}, ${this.h}`;
  }
}
