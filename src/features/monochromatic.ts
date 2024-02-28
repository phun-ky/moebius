import chroma from 'chroma-js';

import {
  MoebiusChromaColorInputType,
  MoebiusColorValueHexType,
  MoebiusColorValueHslType,
  MoebiusPaletteOptionsType
} from '../types';
import { random } from '../utils/random';

/**
 * Generates a monochromatic color palette based on the given color.
 * @param {MoebiusChromaColorInputType} color - The base color for the palette.
 * @param {MoebiusPaletteOptionsType} options - Options for generating the palette.
 * @returns {MoebiusColorValueHexType[]} - An array of hex color values in the palette.
 * @example
 * ```typescript
 * const baseColor = '#003f5c';
 * const options = { numberOfColors: 5, bezier: true, randomOffset: false };
 * const monochromaticPalette = monochromatic(baseColor, options);
 * console.log(monochromaticPalette);
 * [
 *   '#003f5c', // maniacMansion,
 *   '#014268', // darkImperialBlue,
 *   '#024575', // macraggeBlue,
 *   '#044784', // bridgeport,
 *   '#064898', // frightNight,
 *   '#0745b6', // absoluteZero,
 *   '#002df5', // blueBouquet
 * ];
 * ```
 */
export const monochromatic = (
  color: MoebiusChromaColorInputType,
  options: Record<string, unknown> | MoebiusPaletteOptionsType = {}
): MoebiusColorValueHexType[] => {
  const {
    numberOfColors = 8,
    bezier = false,
    randomOffset = false,
    colorScaleMode,
    noDuplicates = true,
    reverseDirection = false,
    correctLightness = true
  } = options as MoebiusPaletteOptionsType;

  let [h, s, l] = chroma(color).hsl();

  if (isNaN(h)) {
    h = 0;
  }

  h = Number(h.toFixed(0));
  s = Number((s * 100).toFixed(0));
  l = Number((l * 100).toFixed(0));

  const hslColors: MoebiusColorValueHslType[] = [];

  hslColors.push(chroma(`hsl(${h}, ${s}%, ${l < 0 ? 0 : l}%)`).hex());

  if (randomOffset) {
    // because we've already added the original color, we start counting from 1
    for (let i = 1; i < numberOfColors; i++) {
      if (reverseDirection) {
        l += random(0, 10);
        h += random(-5, 5);
      } else {
        l -= random(0, 10);
        h -= random(-5, 5);
      }

      if (h > 359) h = 359;

      if (h < 0) h = 0;

      hslColors.push(chroma(`hsl(${h}, ${s}%, ${l < 0 ? 0 : l}%)`).hex());
    }
  } else {
    for (let i = 1; i < numberOfColors; i++) {
      if (reverseDirection) {
        l += 5;
        h += 5;
      } else {
        l -= 5;
        h -= 5;
      }

      if (h > 359) h = 359;

      if (h < 0) h = 0;

      hslColors.push(chroma(`hsl(${h}, ${s}%, ${l < 0 ? 0 : l}%)`).hex());
    }
  }

  let colors = hslColors.map((color) => chroma(color).hex());

  if (noDuplicates) {
    colors = [...new Set(colors)];
  }

  if (bezier) {
    if (colors.length > 1) {
      colors = chroma
        .bezier(colors)
        .scale()
        .mode(colorScaleMode)
        .correctLightness(correctLightness)
        .colors(numberOfColors);
    } else {
      colors = chroma
        .scale(colors)
        .mode(colorScaleMode)
        .correctLightness(correctLightness)
        .colors(numberOfColors);
    }
  }

  return colors;
};
