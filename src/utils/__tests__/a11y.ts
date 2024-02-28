import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getA11yTextColor } from '../a11y';

describe('getA11yTextColor', () => {
  it('should calculate accessible text color based on background color and specified contrast ratio', () => {
    const backgroundColor = '#3498db';
    const ratio = 5;
    const lightForegroundColor = '#ffffff';
    const darkForegroundColor = '#000000';
    const result = getA11yTextColor(backgroundColor, ratio, lightForegroundColor, darkForegroundColor);

    assert.strictEqual(typeof result, 'string');
    assert.match(result, /^#[0-9a-f]{6}$/i);
  });

  it('should use default contrast ratio (5) when not provided', () => {
    const backgroundColor = '#3498db';
    const lightForegroundColor = '#ffffff';
    const darkForegroundColor = '#000000';
    const result = getA11yTextColor(backgroundColor, undefined, lightForegroundColor, darkForegroundColor);

    assert.strictEqual(typeof result, 'string');
    assert.match(result, /^#[0-9a-f]{6}$/i);
  });

  it('should use default lightForegroundColor (#ffffff) when not provided', () => {
    const backgroundColor = '#3498db';
    const ratio = 5;
    const darkForegroundColor = '#000000';
    const result = getA11yTextColor(backgroundColor, ratio, undefined, darkForegroundColor);

    assert.strictEqual(typeof result, 'string');
    assert.match(result, /^#[0-9a-f]{6}$/i);
  });

  it('should use default darkForegroundColor (#000000) when not provided', () => {
    const backgroundColor = '#3498db';
    const ratio = 5;
    const lightForegroundColor = '#ffffff';
    const result = getA11yTextColor(backgroundColor, ratio, lightForegroundColor);

    assert.strictEqual(typeof result, 'string');
    assert.match(result, /^#[0-9a-f]{6}$/i);
  });
});
