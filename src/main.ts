/* eslint-disable import/no-unused-modules */
import { isObjectPlain, isString } from '@phun-ky/typeof';
import chroma from 'chroma-js';
import nearestColor from 'nearest-color';

import { MoebiusColor } from './classes/MoebiusColor';
import { MoebiusPalettes } from './classes/MoebiusPalettes';
import { MoebiusSVGHelper } from './classes/MoebiusSVGHelper';
import {
  MoebiusColorValueHexType,
  MoebiusOptionsType,
  MoebiusReturnType,
  NearestColorColorMatchInterface
} from './types';
import { loadColorNames } from './utils/color-names';

export type * from './types';

/**
 * Load color names and return a function that names the nearest one.
 *
 * @async
 * @function initializeColorNames
 * @param colorNames - See `MoebiusOptionsType.colorNames`.
 * @returns A function that maps a color to the nearest known color, either as
 *   a name or as an object with `name`, `value` and other match metadata
 *
 * @example
 * ```ts
 * const getColorName = await initializeColorNames({ Gold: '#ffd700' });
 * const match = getColorName('#ffcc00');
 * console.log(match); // { name: 'Gold', value: '#ffd700', distance: 3.2, ... }
 * ```
 */
const initializeColorNames = async (
  colorNames?: MoebiusOptionsType['colorNames']
): Promise<(color: string) => NearestColorColorMatchInterface | string> =>
  nearestColor.from(await loadColorNames(colorNames));

/**
 * Initializes and returns Moebius utilities with dynamic color naming support.
 *
 * This includes:
 * - A subclass of `MoebiusColor` with nearest color name mapping
 * - `MoebiusPalettes` for generating color palettes
 * - `MoebiusSVGHelper` for generating SVG paths for colored pie slices.
 *
 * @function
 * @async
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
    constructor(color: MoebiusColorValueHexType) {
      const match = colorNames(color);

      super(
        chroma(color).hex(),
        isString(match)
          ? match
          : (match as NearestColorColorMatchInterface).name
      );
    }
  }

  return {
    MoebiusColor: MoebiusColorAbstract as typeof MoebiusColor,
    MoebiusPalettes,
    MoebiusSVGHelper
  };
}

export default Moebius;
