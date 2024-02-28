import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusColorValueHexType,
  MoebiusPaletteOptionsType
} from '../types';
import { getChromaBezierScaleColors } from '../utils/get-chroma-bezier-scale-colors';
import { getChromaScaleColors } from '../utils/get-chroma-scale-colors';

import { monochromatic } from './monochromatic';

/**
 * Generates a dark mode color palette based on the provided base and secondary colors.
 * @param {MoebiusChromaColorInputType} baseColor - The base color for the palette.
 * @param {MoebiusChromaColorInputType} secondaryColor - The secondary color for the palette.
 * @param {Record<string, unknown> | MoebiusPaletteOptionsType} [options={}] - Palette options.
 * @param {boolean} [options.bezier=false] - Whether to use bezier interpolation for color scales.
 * @param {string} [options.colorScaleMode] - The color scale mode for chroma.mix.
 * @param {boolean} [options.noDuplicates=true] - Whether to remove duplicate colors from the palette.
 * @returns {Record<string, MoebiusColorValueHexType[]>} - The generated dark mode color palette.
 * @example
 * ```ts
 * const baseColor = '#3498db';
 * const secondaryColor = '#2ecc71';
 * const options = { bezier: true, colorScaleMode: 'lch' };
 * const palette = darkmode(baseColor, secondaryColor, options);
 * console.log(palette);
 * ```
 */
export const darkmode = (
  baseColor: MoebiusChromaColorInputType,
  secondaryColor: MoebiusChromaColorInputType,
  options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
): Record<string, MoebiusColorValueHexType[]> => {
  const {
    bezier = false,
    colorScaleMode,
    noDuplicates = true
  } = options as MoebiusPaletteOptionsType;
  const ratio = 0.99;
  const ratioMultiplier = 0.02;
  const primaryAccents = monochromatic(baseColor, options);
  const surfaceAccents = monochromatic(secondaryColor, options);
  const mixedAccents = surfaceAccents.map((hex, index) => {
    return chroma
      .mix(
        primaryAccents[index],
        hex,
        ratio - index * ratioMultiplier,
        colorScaleMode
      )
      .hex();
  });
  const palette = {
    primary: primaryAccents,
    surface: surfaceAccents,
    mixed: mixedAccents
  };

  if (noDuplicates) {
    palette.primary = [...new Set(primaryAccents)];
    palette.surface = [...new Set(surfaceAccents)];
    palette.mixed = [...new Set(mixedAccents)];
  }

  if (bezier) {
    if (
      palette.primary.length > 1 &&
      palette.surface.length > 1 &&
      palette.mixed.length > 1
    ) {
      palette.primary = getChromaBezierScaleColors(palette.primary, options);
      palette.surface = getChromaBezierScaleColors(palette.surface, options);
      palette.mixed = getChromaBezierScaleColors(palette.mixed, options);
    } else {
      palette.primary = getChromaScaleColors(palette.primary, options);
      palette.surface = getChromaScaleColors(palette.surface, options);
      palette.mixed = getChromaScaleColors(palette.mixed, options);
    }
  }

  return palette;
};
