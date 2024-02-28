import chroma from 'chroma-js';

import { MoebiusColorValueHexType } from '../types';

/**
 * Calculates accessible text color based on background color and specified contrast ratio.
 *
 * @param {MoebiusColorValueHexType} backgroundColor - The background color.
 * @param {number} ratio - The desired contrast ratio. Default is 5.
 * @param {MoebiusColorValueHexType} lightForegroundColor - The text color when the background is light. Default is '#ffffff'.
 * @param {MoebiusColorValueHexType} darkForegroundColor - The text color when the background is dark. Default is '#000000'.
 * @returns {MoebiusColorValueHexType} - The calculated text color.
 */
export const getA11yTextColor = (
  backgroundColor: MoebiusColorValueHexType,
  ratio = 5,
  lightForegroundColor: MoebiusColorValueHexType = '#ffffff',
  darkForegroundColor: MoebiusColorValueHexType = '#000000'
): string =>
  chroma.contrast(backgroundColor, lightForegroundColor) < ratio
    ? darkForegroundColor
    : lightForegroundColor;
