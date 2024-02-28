import assert from 'node:assert/strict';
import {describe, it } from 'node:test';

import { MoebiusColorValueHexType } from '../../types';
import { MoebiusSVGHelper } from '../MoebiusSVGHelper';

describe('MoebiusSVGHelper', () => {
  it('should generate SVG paths for colored pie slices', () => {
    const svgHelper = new MoebiusSVGHelper();
    const colors = [['#ff0000', '#00ff00'], ['#0000ff']] as MoebiusColorValueHexType[][];
    const size = 256;
    const svgFragment = svgHelper.getColorPiePaths(colors, size);

    assert.strictEqual(svgFragment instanceof DocumentFragment, true);
    assert.strictEqual(svgFragment.childNodes.length, 2); // defs and g elements

    const defsElement = svgFragment.querySelector('defs') as Element;

    assert.strictEqual(defsElement instanceof Element, true);
    assert.strictEqual(defsElement.childNodes.length, 1); // mask element

    const maskElement = defsElement.querySelector('mask') as Element;

    assert.strictEqual(maskElement instanceof Element, true);
    assert.strictEqual(maskElement.childNodes.length, colors.length + 1); // rect and lines

    const gElement = svgFragment.querySelector('g') as Element;

    assert.strictEqual(gElement instanceof Element, true);
    assert.strictEqual(gElement.childNodes.length, colors.flat().length); // path elements
  });

  it('should generate SVG paths with default size', () => {
    const svgHelper = new MoebiusSVGHelper();
    const colors = [['#ff0000', '#00ff00'], ['#0000ff']] as MoebiusColorValueHexType[][];
    const svgFragment = svgHelper.getColorPiePaths(colors);

    assert.strictEqual(svgFragment instanceof DocumentFragment, true);
    assert.strictEqual(svgFragment.childNodes.length, 2); // defs and g elements

    const defsElement = svgFragment.querySelector('defs') as Element;

    assert.strictEqual(defsElement instanceof Element, true);
    assert.strictEqual(defsElement.childNodes.length, 1); // mask element

    const maskElement = defsElement.querySelector('mask') as Element;

    assert.strictEqual(maskElement instanceof Element, true);
    assert.strictEqual(maskElement.childNodes.length, colors.length + 1); // rect and lines

    const gElement = svgFragment.querySelector('g') as Element;

    assert.strictEqual(gElement instanceof Element, true);
    assert.strictEqual(gElement.childNodes.length, colors.flat().length); // path elements
  });
});
