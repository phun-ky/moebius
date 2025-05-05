/**
 * Represents an HSV (Hue, Saturation, Value) color unit.
 */
export class UnitHSV {
  /** Hue component */
  h: number;
  /** Saturation component */
  s: number;
  /** Value component */
  v: number;

  /**
   * Create a new UnitHSV instance.
   * @param {[number, number, number]} components - The HSV components: [h, s, v]
   */
  constructor([h, s, v]: [number, number, number]) {
    this.h = Number(!isNaN(h) ? h.toFixed(2) : '0');
    this.s = Number(s.toFixed(2));
    this.v = Number(v.toFixed(2));
  }

  /**
   * Converts the HSV unit to a string representation.
   * @returns {string} - A string like `"30.00, 0.50, 0.80"`
   * @example
   * ```ts
   * const hsvUnit = new UnitHSV([30, 0.5, 0.8]);
   * const hsvString = hsvUnit.toString(); // "30.00, 0.50, 0.80"
   * ```
   */
  toString(): string {
    return `${this.h}, ${this.s}, ${this.v}`;
  }
}
