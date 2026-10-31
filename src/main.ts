import { isObjectPlain } from '@phun-ky/typeof';
import chroma from 'chroma-js';

import { MoebiusColor } from './classes/MoebiusColor';
import { MoebiusPalettes } from './classes/MoebiusPalettes';
import { MoebiusSVGHelper } from './classes/MoebiusSVGHelper';
import {
  MoebiusChromaColorInputType,
  MoebiusOptionsType,
  MoebiusReturnType
} from './types';
import { createNameLookup, loadColorNames } from './utils/color-names';
import { matchNearestColor } from './utils/nearest-color';

export type * from './types';

// The classes Moebius() returns, for typing instances
export type { MoebiusColor, MoebiusPalettes, MoebiusSVGHelper };

/**
 * Load color names and return a function that names the nearest one.
 *
 * @function initializeColorNames
 * @param colorNames - See `MoebiusOptionsType.colorNames`.
 * @returns A function from a color to the nearest known color's name, or
 *   `''` when `colorNames` is `false`
 *
 * @example
 * ```ts
 * const getColorName = await initializeColorNames({ Gold: '#ffd700' });
 * console.log(getColorName('#ffcc00')); // 'Gold'
 * ```
 */
const initializeColorNames = async (
  colorNames?: MoebiusOptionsType['colorNames']
): Promise<(color: string) => string> => {
  if (colorNames === false) return () => '';

  return createNameLookup(matchNearestColor(await loadColorNames(colorNames)));
};

/**
 * Initializes and returns Moebius utilities with dynamic color naming support.
 *
 * This includes:
 * - A subclass of `MoebiusColor` with nearest color name mapping
 * - `MoebiusPalettes` for generating color palettes
 * - `MoebiusSVGHelper` for generating SVG paths for colored pie slices.
 *
 * @function
 * @param {MoebiusOptionsType} [options] - Options; `colorNames` sets where
 *   color names come from. Without it, names are fetched from
 *   https://color-names.herokuapp.com/v1/, which is deprecated.
 * @returns {Promise<MoebiusReturnType>} An object containing Moebius utility classes
 * @throws {TypeError} If `options` is not an object, or `colorNames` has an
 *   unsupported shape.
 * @throws {Error} If a `colorNames` URL responds with an error status.
 *
 * @example
 * ```ts
 * const moebius = await Moebius({ colorNames: '/colornames.json' });
 * const color = new moebius.MoebiusColor('#abc123');
 * console.log(color.name); // Closest color name, e.g., 'Avocado'
 * ```
 */
async function Moebius(options?: MoebiusOptionsType): MoebiusReturnType {
  if (options !== undefined && !isObjectPlain(options)) {
    throw new TypeError('Moebius() options must be an object');
  }

  const colorNames = await initializeColorNames(options?.colorNames);

  /**
   * Extended version of `MoebiusColor` that assigns a nearest color name
   * using the initialized color name map.
   */
  class MoebiusColorAbstract extends MoebiusColor {
    constructor(color: MoebiusChromaColorInputType) {
      const hex = chroma(color).hex();

      super(hex, colorNames(hex));
    }
  }

  return {
    MoebiusColor: MoebiusColorAbstract,
    MoebiusPalettes,
    MoebiusSVGHelper
  };
}

export default Moebius;
