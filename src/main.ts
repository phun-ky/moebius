/* eslint-disable import/no-unused-modules */
import { isString } from '@phun-ky/typeof';
import chroma from 'chroma-js';
import nearestColor from 'nearest-color';

import { MoebiusColor } from './classes/MoebiusColor';
import { MoebiusPalettes } from './classes/MoebiusPalettes';
import { MoebiusSVGHelper } from './classes/MoebiusSVGHelper';
import {
  MoebiusColorValueHexType,
  MoebiusReturnType,
  NearestColorColorMatchInterface
} from './types';

export * from './types';

/**
 * Initializes a color name mapping using an external API.
 * The resulting function takes a color (hex or keyword) and returns either:
 * - The matched color name (as a string)
 * - An object with `name`, `value`, and other nearest match metadata
 *
 * @async
 * @function initializeColorNames
 * @returns A function that maps color strings to the nearest known color
 *
 * @example
 * ```ts
 * const getColorName = await initializeColorNames();
 * const match = getColorName('#ffcc00');
 * console.log(match); // { name: 'gold', value: '#ffd700', distance: 3.2, ... }
 * ```
 */
const initializeColorNames = async (): Promise<
  (color: string) => NearestColorColorMatchInterface | string
> => {
  const response = await fetch('https://color-names.herokuapp.com/v1/');
  const data = await response.json();
  const colors = data.colors;
  const map = {};

  colors.forEach((entry: Record<string, unknown>) => {
    map[entry.name as string] = entry.hex;
  });

  return nearestColor.from(map);
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
 * @async
 * @returns {Promise<MoebiusReturnType>} An object containing Moebius utility classes
 *
 * @example
 * ```ts
 * const moebius = await Moebius();
 * const color = new moebius.MoebiusColor('#abc123');
 * console.log(color.name); // Closest color name, e.g., 'Avocado'
 * ```
 */
async function Moebius(): MoebiusReturnType {
  const colorNames = await initializeColorNames();

  /**
   * Extended version of `MoebiusColor` that assigns a nearest color name
   * using the initialized color name map.
   */
  class MoebiusColorAbstract extends MoebiusColor {
    constructor(color: MoebiusColorValueHexType) {
      super(
        chroma(color).hex(),
        isString(colorNames(color))
          ? (colorNames(color) as string)
          : (colorNames(color) as NearestColorColorMatchInterface).name
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
