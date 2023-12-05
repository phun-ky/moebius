import chroma from 'chroma-js';
import nearestColor from 'nearest-color';

import {
  MoebiusColorValueHexType,
  NearestColorColorMatchInterface
} from './types';

import { MoebiusSVGHelper } from './classes/MoebiusSVGHelper';
import { MoebiusPalettes } from './classes/MoebiusPalettes';
import { MoebiusColor } from './classes/MoebiusColor';

export * from './types';

export type MoebiusReturnType = Promise<{
  MoebiusColor: typeof MoebiusColor;
  MoebiusPalettes: typeof MoebiusPalettes;
  MoebiusSVGHelper: typeof MoebiusSVGHelper;
}>;

const initializeColorNames = async (): Promise<
  // eslint-disable-next-line no-unused-vars
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
 * Asynchronous function to initialize Moebius with required data
 * @function
 * @returns {MoebiusReturnType} An object with Moebius classes
 *
 */
async function Moebius(): MoebiusReturnType {
  const colorNames = await initializeColorNames();

  class MoebiusColorAbstract extends MoebiusColor {
    constructor(color: MoebiusColorValueHexType) {
      super(
        chroma(color).hex(),
        typeof colorNames(color) === 'string'
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
