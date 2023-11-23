/**
 * Generates a random integer within a specified range.
 *
 * @param {number} max - The maximum value (inclusive) for the random number.
 * @param {number} min - The minimum value (inclusive) for the random number.
 * @returns {number} - A random integer within the specified range.
 *
 * @example
 * ```ts
 * // Generate a random integer between 1 and 10, inclusive
 * const randomNumber = random(10, 1);
 * console.log(randomNumber); // Example output: 5
 * ```
 */
export const random = (max: number, min: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
