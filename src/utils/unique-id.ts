/**
 * Generates a unique identifier.
 * @returns {string} - A unique identifier.
 * @example
 * ```ts
 * const id = uniqueID();
 * console.log(id); // "_abc123"
 * ```
 */
export const uniqueID = (): string =>
  '_' + Math.random().toString(36).substring(2, 11);
