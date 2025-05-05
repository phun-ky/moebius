/**
 * Represents an RGB float color unit.
 */
export class UnitRGBFloat {
  /** Red component */
  r: number;
  /** Green component */
  g: number;
  /** Blue component */
  b: number;

  /**
   * Create a new UnitRGBFloat instance.
   * @param {{ r: number, g: number, b: number }} components - The RGB float components.
   */
  constructor({ r, g, b }: { r: number; g: number; b: number }) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  /**
   * Converts the RGB float unit to a string representation.
   * @returns {string} - The string representation of the RGB float unit.
   * @example
   * ```ts
   * const rgbFloatUnit = new UnitRGBFloat({ r: 255, g: 128, b: 0 });
   * const rgbFloatString = rgbFloatUnit.toString(); // "255, 128, 0"
   * ```
   */
  toString(): string {
    return `${this.r}, ${this.g}, ${this.b}`;
  }
}
