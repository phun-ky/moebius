/**
 * Generates an SVG path representing a pie slice.
 *
 * @param {number} start - Starting angle of the pie slice in degrees.
 * @param {number} interval - Angular interval of the pie slice in degrees.
 * @param {number} radius - Radius of the circle.
 * @param {number} size - Size of the circle. Default is 256.
 * @returns {string} - SVG path representing the pie slice.
 */
export const pieSlice = (
  start: number,
  interval: number,
  radius: number,
  size: number = 256
): string => {
  const centerX = size / 2; // X-coordinate of the circle's center
  const centerY = centerX; // Y-coordinate of the circle's center

  let stop = start + interval;

  // Ensure start is smaller than stop
  if (start > stop) {
    const temp = start;

    start = stop;
    stop = temp;
  }

  // Calculate start and end points
  const startX = centerX + radius * Math.cos((-start + 90) * (Math.PI / 180));
  const startY = centerY + radius * Math.sin((-start + 90) * (Math.PI / 180));
  const endX = centerX + radius * Math.cos((-stop + 90) * (Math.PI / 180));
  const endY = centerY + radius * Math.sin((-stop + 90) * (Math.PI / 180));
  const largeArcFlag = stop - start <= 180 ? '0' : '1';

  // Create the SVG path
  return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${endX} ${endY} L ${centerX} ${centerY} Z`;
};
