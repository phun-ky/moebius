import { MoebiusPaletteDefaultOptionsType } from '../types';

/**
 * Default options for the Moebius Palette.
 *
 * @type {MoebiusPaletteDefaultOptionsType}
 * @readonly
 *
 * @example
 * ```ts
 * console.log(MOEBIUS_PALETTE_DEFAULT_OPTIONS);
 * // {
 * //   diverging: false,
 * //   bezier: false,
 * //   randomOffset: false,
 * //   correctLightness: false,
 * //   noDuplicates: true,
 * //   colorScaleMode: 'lch',
 * //   reverseDirection: false
 * // }
 * ```
 */
export const MOEBIUS_PALETTE_DEFAULT_OPTIONS: MoebiusPaletteDefaultOptionsType =
  {
    diverging: false,
    bezier: false,
    randomOffset: false,
    correctLightness: false,
    noDuplicates: true,
    colorScaleMode: 'lch',
    reverseDirection: false
  };
