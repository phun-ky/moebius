import { MoebiusColorValueHexType } from '../types';

/**
 * Generates a random hexadecimal color.
 * @returns {MoebiusColorValueHexType} - The randomly generated color in hexadecimal format.
 */
export const getRandomColorHex = (): MoebiusColorValueHexType =>
  `#${[...Array(6)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('')}`;
