import { MoebiusColorValueHexType } from '../types';
import { getStartMaskDegree } from '../utils/svg/get-start-mask-degree';
import { pieSlice } from '../utils/svg/pie-slice';
import { uniqueID } from '../utils/unique-id';

/**
 * Helper class for generating SVG paths for colored pie slices.
 */
export class MoebiusSVGHelper {
  xlmns = 'http://www.w3.org/2000/svg';

  /**
   * Gets SVG paths for coloured pie slices based on the provided colors.
   * @param {MoebiusColorValueHexType[][]} colors - Array of color groups.
   * @param {number} [size=256] - Size of the SVG.
   * @returns {DocumentFragment} - Document fragment containing the SVG paths.
   * @example
   * ```ts
   * const svgHelper = new MoebiusSVGHelper();
   * const colors = [['#ff0000', '#00ff00'], ['#0000ff']];
   * const svgFragment = svgHelper.getColorPiePaths(colors, 256);
   * document.body.appendChild(svgFragment);
   * ```
   */
  getColorPiePaths(
    colors: MoebiusColorValueHexType[][],
    size: number = 256
  ): DocumentFragment {
    const df = document.createDocumentFragment();
    const defsElement = document.createElementNS(this.xlmns, 'defs');
    const maskElement = document.createElementNS(this.xlmns, 'mask');
    const rectElement = document.createElementNS(this.xlmns, 'rect');
    const gElement = document.createElementNS(this.xlmns, 'g');
    const interval = 360 / colors.length;
    const id = uniqueID();

    maskElement.setAttributeNS(null, 'id', id);
    rectElement.setAttributeNS(null, 'height', '100%');
    rectElement.setAttributeNS(null, 'width', '100%');
    rectElement.setAttributeNS(null, 'fill', 'white');
    gElement.setAttributeNS(null, 'mask', `url(#${id})`);
    maskElement.appendChild(rectElement);

    const maskDegrees = 360 / colors.length;
    const startMaskDegree = getStartMaskDegree(maskDegrees / 2, colors.length);

    for (let i = startMaskDegree; i < 360; i += maskDegrees) {
      const lineElement = document.createElementNS(this.xlmns, 'line');

      lineElement.setAttributeNS(null, 'x1', '128');
      lineElement.setAttributeNS(null, 'y1', '128');
      lineElement.setAttributeNS(null, 'x2', '0');
      lineElement.setAttributeNS(null, 'y2', '128');
      lineElement.setAttributeNS(null, 'stroke', 'black');
      lineElement.setAttributeNS(null, 'stroke-width', '6');
      lineElement.setAttributeNS(null, 'transform', `rotate(${i} 128 128)`);
      maskElement.appendChild(lineElement);
    }

    let start = 0;

    colors.forEach((group: string[]) => {
      const inwardInterval = size / 2 / group.length;

      start += interval;

      return group.forEach((color: MoebiusColorValueHexType, index: number) => {
        const r = size / 2 - index * inwardInterval;
        const path = document.createElementNS(this.xlmns, 'path');

        path.setAttributeNS(null, 'fill', color);
        path.setAttributeNS(null, 'data-color-hex', color);
        path.setAttributeNS(null, 'data-r', `${r}`);
        path.setAttributeNS(null, 'd', pieSlice(start, interval, r));
        gElement.appendChild(path);
      });
    });
    defsElement.appendChild(maskElement);
    df.appendChild(defsElement);
    df.appendChild(gElement);

    return df;
  }
}
