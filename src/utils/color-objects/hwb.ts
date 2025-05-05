/**
 * Represents an HWB (Hue, Whiteness, Blackness) color unit.
 */
export class UnitHWB {
  /** Hue component */
  h: number;
  /** Whiteness component */
  w: number;
  /** Blackness component */
  b: number;

  /**
   * Create a new UnitHWB instance.
   * @param {{ h: number, w: number, b: number }} components - The HWB components.
   */
  constructor({ h, w, b }: { h: number; w: number; b: number }) {
    this.h = h;
    this.w = w;
    this.b = b;
  }

  /**
   * Converts the HWB unit to a string representation.
   * @returns {string} - A string like `"200, 0.2, 0.1"`
   * @example
   * ```ts
   * const hwbUnit = new UnitHWB({ h: 200, w: 0.2, b: 0.1 });
   * const hwbString = hwbUnit.toString(); // "200, 0.2, 0.1"
   * ```
   */
  toString(): string {
    return `${this.h}, ${this.w}, ${this.b}`;
  }
}
