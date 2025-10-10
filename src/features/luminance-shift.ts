import chroma from 'chroma-js';

import {
  MoebiusColorValueHexType,
  MoebiusPaletteOptionsType,
  MoebiusChromaColorInputType
} from '../types';
import { range } from '../utils/range';

import { harmonize } from './harmonize';

/**
 * Generate a luminance shift palette based on the input color.
 *
 * @param {MoebiusChromaColorInputType} color - The base color for generating the luminance shift palette.
 * @param {MoebiusPaletteOptionsType} [options={}] - Options for generating the palette.
 *   @param {boolean} [options.diverging=false] - Whether to generate a diverging palette.
 *   @param {number} [options.numberOfColors=7] - The number of colors in the luminance shift palette.
 * @returns {MoebiusColorValueHexType[]} - Array of hex color values representing the luminance shift palette.
 * @private
 * @example
 * ```ts
 * const baseColor = '#3498db';
 * const luminanceShiftPalette = generateLuminanceShiftPalette(baseColor, { numberOfColors: 5 });
 * console.log(luminanceShiftPalette); // ['#3498db', '#99db34', '#dbd134', '#db3434', '#8f34db']
 * ```
 */
const generateLuminanceShiftPalette = (
  color: MoebiusChromaColorInputType,
  options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
) => {
  if (!color) throw Error('MoebiusPalettes: missing input `color`');

  const { diverging = false, numberOfColors = 7 } =
    options as MoebiusPaletteOptionsType;
  const [l, a, b] = chroma(color).lab();
  const lRange = 100 * (0.95 - 1 / numberOfColors);
  const lStep = lRange / (numberOfColors - 1);
  const lStart = (100 - lRange) * 0.5;
  const colorRange = range(lStart, lStart + numberOfColors * lStep, lStep);

  let offset = 0;

  if (!diverging) {
    offset = 9999;
    for (let i = 0; i < numberOfColors; i++) {
      const diff = l - colorRange[i];

      if (Math.abs(diff) < Math.abs(offset)) {
        offset = diff;
      }
    }
  }

  return colorRange.map((l) =>
    chroma.lab(l + offset, a, b).hex()
  ) as MoebiusColorValueHexType[];
};
/**
 * Generate an array of auto colors for luminance shift based on the input color.
 *
 * @param {MoebiusChromaColorInputType} color - The base color for generating auto colors.
 * @param {MoebiusPaletteOptionsType} [options={}] - Options for generating the auto colors.
 *   @param {number} [options.numberOfColors] - The number of auto colors to generate.
 *   @param {boolean} [options.reverseDirection=false] - Whether to reverse the order of generated colors.
 *   @param {boolean} [options.diverging=false] - Whether to generate diverging auto colors.
 *   @param {string} [options.divergentColor] - The divergent color to include in the palette.
 * @returns {MoebiusColorValueHexType[]} - Array of hex color values representing the auto colors.
 * @private
 * @example
 * ```ts
 * const baseColor = '#3498db';
 * const autoColors = luminanceShiftAutoColors(baseColor, { numberOfColors: 5 });
 * console.log(autoColors); // ['#3498db', '#99db34', '#dbd134', '#db3434', '#8f34db']
 * ```
 */
const luminanceShiftAutoColors = (
  color: MoebiusColorValueHexType,
  options?: Partial<MoebiusPaletteOptionsType>
) => {
  const {
    numberOfColors = 7,
    reverseDirection = false,
    diverging = false,
    divergentColor = '#f5f5f5'
  } = options || {};

  if (diverging) {
    const colors = generateLuminanceShiftPalette(chroma(color).hex(), {
      numberOfColors: Math.ceil((numberOfColors as number) / 2)
    }).concat(divergentColor);

    if (reverseDirection) colors.reverse();

    return colors;
  } else {
    return generateLuminanceShiftPalette(color, { numberOfColors });
  }
};

/**
 * Generate a luminance shift palette based on an array of colors, with optional diverging colors.
 *
 * @param {MoebiusChromaColorInputType[]} colors - Array of base colors for generating the luminance shift palette.
 * @param {MoebiusChromaColorInputType[]} [divergingColors=[]] - Array of diverging colors.
 * @param {MoebiusPaletteOptionsType} [options={}] - Options for generating the palette.
 *   @param {number} [options.numberOfColors=8] - The total number of colors in the luminance shift palette.
 *   @param {boolean} [options.diverging=false] - Whether to generate a diverging palette.
 *   @param {string} [options.colorScaleMode] - The color scale mode for chroma-js.
 *   @param {boolean} [options.bezier=false] - Whether to use bezier interpolation.
 *   @param {string} [options.divergentColor='#f5f5f5'] - The divergent color for a diverging palette.
 *   @param {boolean} [options.correctLightness=true] - Whether to correct lightness in the generated palette.
 * @returns {MoebiusColorValueHexType[]} - Array of hex color values representing the luminance shift palette.
 *
 * @example
 * ```ts
 * const baseColors = ['#3498db', '#99db34'];
 * const divergingColors = ['#db3434'];
 * const luminanceShiftPalette = luminanceShift(baseColors, divergingColors, { numberOfColors: 5 });
 * console.log(luminanceShiftPalette); // ['#3498db', '#99db34', '#dbd134', '#db3434', '#8f34db']
 * ```
 */
export const luminanceShift = (
  colors: MoebiusColorValueHexType[],
  divergingColors: MoebiusColorValueHexType[] = [],
  options?: MoebiusPaletteOptionsType
): MoebiusColorValueHexType[] => {
  const {
    numberOfColors = 8,
    diverging = false,
    colorScaleMode = 'rgb',
    bezier = false,
    divergentColor = '#f5f5f5',
    correctLightness = true
  } = options || {};

  divergingColors =
    divergingColors.length === 0
      ? [harmonize(colors[0], 90, 270, 90)[3]]
      : divergingColors;

  const even = numberOfColors % 2 === 0;
  const numberOfColorsLeft = diverging
    ? Math.ceil(numberOfColors / 2) + (even ? 1 : 0)
    : numberOfColors;
  const numberOfColorsRight = diverging
    ? Math.ceil(numberOfColors / 2) + (even ? 1 : 0)
    : 0;
  const generatedColors =
    colors.length !== 1
      ? colors
      : luminanceShiftAutoColors(colors[0], {
          numberOfColors: numberOfColorsLeft,
          divergentColor
        });

  let generatedDivergentColors: MoebiusColorValueHexType[] = [];

  if (diverging) {
    generatedDivergentColors =
      divergingColors.length !== 1
        ? divergingColors
        : luminanceShiftAutoColors(divergingColors[0], {
            numberOfColors: numberOfColorsRight,
            divergentColor,
            reverseDirection: false,
            diverging
          });
  }

  let stepsLeft = colors.length
    ? (chroma
        .scale(generatedColors)
        .mode(colorScaleMode)
        .correctLightness(correctLightness)
        .colors(numberOfColorsLeft) as MoebiusColorValueHexType[])
    : [];

  if (bezier) {
    stepsLeft = colors.length
      ? (chroma
          .bezier(generatedColors)
          .scale()
          .mode(colorScaleMode)
          .correctLightness(correctLightness)
          .colors(numberOfColorsLeft) as MoebiusColorValueHexType[])
      : [];
  }

  let stepsRight =
    diverging && divergingColors.length
      ? (chroma
          .scale(generatedDivergentColors)
          .mode(colorScaleMode)
          .correctLightness(correctLightness)
          .colors(numberOfColorsRight) as MoebiusColorValueHexType[])
      : [];

  if (bezier) {
    stepsRight =
      diverging && divergingColors.length
        ? (chroma
            .bezier(generatedDivergentColors)
            .scale()
            .mode(colorScaleMode)
            .correctLightness(correctLightness)
            .colors(numberOfColorsRight) as MoebiusColorValueHexType[])
        : [];
  }

  let steps = stepsLeft;

  steps = (
    diverging
      ? stepsLeft.slice(
          0,
          stepsLeft.length - (numberOfColorsLeft % 2 !== 0 ? 0 : 1)
        )
      : stepsLeft
  )
    //).concat(stepsRight.slice(1).reverse());
    .concat(stepsRight.reverse());

  return steps;
};
