/**
 * Calculates the starting mask degree based on the number of elements in a color group.
 *
 * @param {number} initial - The initial starting degree.
 * @param {number} length - The number of elements in the color group.
 * @returns {number} - The adjusted starting degree for creating a color mask.
 */
export const getStartMaskDegree = (initial: number, length: number): number => {
  if (length === 4 || length === 8 || length === 12) {
    return 0;
  } else if (length === 3 || length === 9) {
    return 30;
  } else if (length === 7) {
    return 12;
  } else if (length === 5) {
    return 55;
  }

  return initial;
};
