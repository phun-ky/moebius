/**
 * Generates an array of numbers within a specified range with a given interval.
 * @param {number} start - The starting value of the range.
 * @param {number} stop - The stopping value of the range.
 * @param {number} interval - The interval between numbers in the range.
 * @returns {number[]} - An array of numbers in the specified range.
 * @example
 * ```ts
 * const result = range(1, 10, 2);
 * console.log(result); // [1, 3, 5, 7, 9]
 * ```
 */
export const range = (
  start: number,
  stop: number,
  interval: number
): number[] => {
  const a: number[] = [];

  for (let i = start; i < stop; i += interval) {
    a.push(i);
  }

  return a;
};
