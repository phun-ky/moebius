/**
 * Represents an HSL (Hue, Saturation, Lightness) color unit.
 */
export class UnitHSL {
  /** Hue component (0–360) */
  h: number;
  /** Saturation component (0–100%) */
  s: number;
  /** Lightness component (0–100%) */
  l: number;

  /**
   * Create a new UnitHSL instance.
   * @param {[number, number, number]} components - The HSL components: [h, s, l]
   */
  constructor([h, s, l]: [number, number, number]) {
    this.h = Number(!isNaN(h) ? h.toFixed(0) : '0');
    this.s = Number((s * 100).toFixed(0));
    this.l = Number((l * 100).toFixed(0));
  }

  /**
   * Converts the HSL unit to a CSS string representation.
   * @returns {string} - A string like "hsl(30, 50%, 80%)"
   * @example
   * ```ts
   * const hslUnit = new UnitHSL([30, 0.5, 0.8]);
   * const hslString = hslUnit.toString(); // "hsl(30, 50%, 80%)"
   * ```
   */
  toString(): string {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  }
}

/**
 * Represents an HSL (Hue, Saturation, Lightness) color unit with float values.
 */
export class UnitHSLFloat {
  /** Hue component */
  h: number;
  /** Saturation component */
  s: number;
  /** Lightness component */
  l: number;

  /**
   * Create a new UnitHSLFloat instance.
   * @param {[number, number, number]} components - The HSL components: [h, s, l]
   */
  constructor([h, s, l]: [number, number, number]) {
    this.h = Number(!isNaN(h) ? h.toFixed(0) : '0');
    this.s = Number(s.toFixed(2));
    this.l = Number(l.toFixed(2));
  }

  /**
   * Converts the HSL float unit to a string.
   * @returns {string} - A string like "30, 0.50, 0.80"
   * @example
   * ```ts
   * const hslFloatUnit = new UnitHSLFloat([30, 0.5, 0.8]);
   * const hslFloatString = hslFloatUnit.toString(); // "30, 0.50, 0.80"
   * ```
   */
  toString(): string {
    return `${this.h}, ${this.s}, ${this.l}`;
  }
}
