/**
 * Represents an HSI (Hue, Saturation, Intensity) color unit.
 */
export class UnitHSI {
  /** Hue component */
  h: number;
  /** Saturation component */
  s: number;
  /** Intensity component */
  i: number;

  /**
   * Create a new UnitHSI instance.
   * @param {[number, number, number]} components - The HSI components: [h, s, i]
   */
  constructor([h, s, i]: [number, number, number]) {
    this.h = Number(!isNaN(h) ? h.toFixed(2) : '0');
    this.s = Number(s.toFixed(2));
    this.i = Number(i.toFixed(2));
  }

  /**
   * Converts the HSI unit to a string representation.
   * @returns {string} - The string representation of the HSI unit.
   * @example
   * ```ts
   * const hsiUnit = new UnitHSI([30, 0.5, 0.8]);
   * const hsiString = hsiUnit.toString(); // "30, 0.5, 0.8"
   * ```
   */
  toString(): string {
    return `${this.h}, ${this.s}, ${this.i}`;
  }
}
