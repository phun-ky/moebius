/**
 * Shuffles the elements of an array.
 * @param {unknown[]} array - The array to shuffle.
 * @returns {unknown[]} - The shuffled array.
 */
export const arrayShuffle = (array: unknown[]): unknown[] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const identity = (x: any) => x;
  const newArray = array.map(identity);

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};
