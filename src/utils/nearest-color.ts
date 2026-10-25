/**
 * An RGB color, each channel an integer from 0 to 255.
 */
type RGB = { r: number; g: number; b: number };

/**
 * Parse a `#rgb` or `#rrggbb` hex color.
 *
 * @param hex - A hex color, with or without `#`.
 * @returns The color's channels.
 */
const parseHex = (hex: string): RGB => {
  let digits = hex.replace('#', '');

  if (digits.length === 3) {
    digits = [...digits].map((digit) => digit + digit).join('');
  }

  return {
    r: parseInt(digits.slice(0, 2), 16),
    g: parseInt(digits.slice(2, 4), 16),
    b: parseInt(digits.slice(4, 6), 16)
  };
};

/**
 * Create a function that finds the named color nearest to a given color.
 *
 * Nearest means the smallest distance between the two colors' RGB channels.
 * On a tie, the name that comes first in `colorNames` wins. This matches
 * what `nearest-color`'s `from()` returns for the same names.
 *
 * @param colorNames - A map of name to `#rgb` or `#rrggbb` hex.
 * @returns A function from a `#rrggbb` color to the nearest name, its hex and
 *   the distance.
 *
 * @example
 * ```ts
 * const match = matchNearestColor({ Gold: '#ffd700', Navy: '#000080' });
 * match('#ffcc00'); // { name: 'Gold', value: '#ffd700', distance: 11 }
 * ```
 */
export const matchNearestColor = (
  colorNames: Record<string, string>
): ((color: string) => { name: string; value: string; distance: number }) => {
  const colors = Object.keys(colorNames).map((name) => ({
    name,
    value: colorNames[name],
    rgb: parseHex(colorNames[name])
  }));

  return (color) => {
    const needle = parseHex(color);

    let nearest = colors[0];
    let minimum = Infinity;

    for (const candidate of colors) {
      const distance =
        (needle.r - candidate.rgb.r) ** 2 +
        (needle.g - candidate.rgb.g) ** 2 +
        (needle.b - candidate.rgb.b) ** 2;

      if (distance < minimum) {
        minimum = distance;
        nearest = candidate;
      }
    }

    return {
      name: nearest.name,
      value: nearest.value,
      distance: Math.sqrt(minimum)
    };
  };
};
