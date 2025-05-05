/**
 * Represents a CMYK color unit.
 */
export class UnitCMYK {
  /** Cyan component */
  c: number;
  /** Magenta component */
  m: number;
  /** Yellow component */
  y: number;
  /** Black (Key) component */
  k: number;

  /**
   * Create a new UnitCMYK instance.
   * @param {{ c: number, m: number, y: number, k: number }} components - The CMYK components.
   */
  constructor({ c, m, y, k }: { c: number; m: number; y: number; k: number }) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
  }

  /**
   * Converts the CMYK unit to a string representation.
   * @returns {string} - The string representation of the CMYK unit.
   * @example
   * ```ts
   * const cmykUnit = new UnitCMYK({ c: 0.2, m: 0.4, y: 0.6, k: 0.1 });
   * const cmykString = cmykUnit.toString(); // "0.2, 0.4, 0.6, 0.1"
   * ```
   */
  toString(): string {
    return `${this.c}, ${this.m}, ${this.y}, ${this.k}`;
  }
}
