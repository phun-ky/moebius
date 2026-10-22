import { isObjectPlain, isString } from '@phun-ky/typeof';
import chroma from 'chroma-js';

import { MoebiusColorNamesType } from '../types';

/**
 * Where `Moebius()` fetches color names from when none are passed.
 *
 * @deprecated Pass `colorNames` to `Moebius()`; 3.0 stops fetching by default.
 */
export const DEFAULT_COLOR_NAMES_URL = 'https://color-names.herokuapp.com/v1/';

const HEX_COLOR = /^#?(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;

let hasWarnedAboutDefault = false;

/**
 * Normalize a hex color to `#rrggbb` or `#rgb`, lowercased.
 *
 * @param value - The value to check.
 * @param name - The color name, for the error message.
 * @returns The normalized hex color.
 * @throws {TypeError} If the value is not a hex color.
 */
const toHex = (value: unknown, name: string): string => {
  if (!isString(value) || !HEX_COLOR.test(value)) {
    throw new TypeError(
      `colorNames: "${name}" must be a hex color such as #ff9900, got ${JSON.stringify(value)}`
    );
  }

  return `#${value.replace('#', '').toLowerCase()}`;
};

/**
 * Turn color name data into a map of name to hex.
 *
 * The map has no prototype, so names such as `constructor` or `__proto__` are
 * ordinary keys.
 *
 * @param data - A map of name to hex, an array of `{ name, hex }`, or
 *   `{ colors: [...] }` as the color-names API returns.
 * @returns A map of name to `#`-prefixed hex.
 * @throws {TypeError} If the data has another shape or a value is not a hex
 *   color.
 * @throws {RangeError} If the data has no colors.
 *
 * @example
 * ```ts
 * toColorNameMap([{ name: 'Orange', hex: '#ff9900' }]);
 * // { Orange: '#ff9900' }
 * ```
 */
export const toColorNameMap = (data: unknown): Record<string, string> => {
  const map: Record<string, string> = Object.create(null);

  if (Array.isArray(data)) {
    for (const entry of data) {
      if (!isObjectPlain(entry) || !isString(entry.name)) {
        throw new TypeError(
          `colorNames: array entries must be { name, hex }, got ${JSON.stringify(entry)}`
        );
      }

      map[entry.name] = toHex(entry.hex, entry.name);
    }
  } else if (isObjectPlain(data) && Array.isArray(data.colors)) {
    return toColorNameMap(data.colors);
  } else if (isObjectPlain(data)) {
    for (const name of Object.keys(data)) {
      map[name] = toHex(data[name], name);
    }
  } else {
    throw new TypeError(
      'colorNames must be a map of name to hex, an array of { name, hex }, or a URL'
    );
  }

  if (Object.keys(map).length === 0) {
    throw new RangeError('colorNames must contain at least one color');
  }

  return map;
};

/**
 * Fetch color name data from a URL.
 *
 * @param url - Where the JSON is.
 * @returns A map of name to hex.
 * @throws {Error} If the response is not 2xx.
 * @throws {TypeError} If the response is not JSON in a supported shape.
 */
const fetchColorNames = async (
  url: string | URL
): Promise<Record<string, string>> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `colorNames: could not load ${url}: ${response.status} ${response.statusText}`.trim()
    );
  }

  let data: unknown;

  try {
    data = await response.json();
  } catch {
    throw new TypeError(`colorNames: ${url} did not return valid JSON`);
  }

  return toColorNameMap(data);
};

/**
 * Load color names for `Moebius()`.
 *
 * @param colorNames - A map, an array or a URL; see `MoebiusColorNamesType`.
 *   Without it, names are fetched from the deprecated default URL and a
 *   warning is logged once.
 * @returns A map of name to hex.
 * @throws {TypeError} If `colorNames` or the data it points to has an
 *   unsupported shape.
 * @throws {Error} If a URL responds with an error status.
 */
export const loadColorNames = async (
  colorNames?: MoebiusColorNamesType
): Promise<Record<string, string>> => {
  if (colorNames === undefined) {
    if (!hasWarnedAboutDefault) {
      hasWarnedAboutDefault = true;
      console.warn(
        `@phun-ky/moebius: fetching color names from ${DEFAULT_COLOR_NAMES_URL} is deprecated and stops being the default in 3.0. Pass colorNames to Moebius().`
      );
    }

    return fetchColorNames(DEFAULT_COLOR_NAMES_URL);
  }

  if (isString(colorNames) || colorNames instanceof URL) {
    return fetchColorNames(colorNames);
  }

  return toColorNameMap(colorNames);
};

/**
 * Wrap a nearest-color matcher so each distinct color is looked up once.
 *
 * Finding the nearest name searches every name, and apps construct the same
 * colors many times (moebius.wtf: 3,025 colors, 285 distinct), so the
 * result is cached by the color's six-digit hex.
 *
 * @param match - A matcher from `nearest-color`'s `from()`.
 * @returns A function from any color to the nearest name.
 */
export const createNameLookup = (
  match: (color: string) => { name: string } | string | null
): ((color: string) => string) => {
  const cache = new Map<string, string>();

  return (color) => {
    const hex = chroma(color).hex('rgb');
    let name = cache.get(hex);

    if (name === undefined) {
      const result = match(hex);

      name = isString(result) ? result : (result?.name ?? '');
      cache.set(hex, name);
    }

    return name;
  };
};
