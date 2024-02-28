import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitRGBFloat } from '../rgb';

describe('UnitRGBFloat', () => {
  it('should create an instance of UnitRGBFloat', () => {
    const rgbFloatUnit = new UnitRGBFloat({ r: 0.5, g: 0.25, b: 0 });

    assert.strictEqual(typeof rgbFloatUnit, 'object');
    assert.strictEqual(rgbFloatUnit.constructor.name, 'UnitRGBFloat');
    assert.strictEqual(typeof rgbFloatUnit.r, 'number');
    assert.strictEqual(typeof rgbFloatUnit.g, 'number');
    assert.strictEqual(typeof rgbFloatUnit.b, 'number');
    assert.strictEqual(rgbFloatUnit.r, 0.5);
    assert.strictEqual(rgbFloatUnit.g, 0.25);
    assert.strictEqual(rgbFloatUnit.b, 0);
  });

  it('should convert the RGB float unit to a string representation', () => {
    const rgbFloatUnit = new UnitRGBFloat({ r: 0.5, g: 0.25, b: 0 });
    const rgbFloatString = rgbFloatUnit.toString();

    assert.strictEqual(typeof rgbFloatString, 'string');
    assert.strictEqual(rgbFloatString, '0.5, 0.25, 0');
  });

  it('should handle negative values', () => {
    const rgbFloatUnit = new UnitRGBFloat({ r: -0.5, g: -0.25, b: 0 });
    const rgbFloatString = rgbFloatUnit.toString();

    assert.strictEqual(typeof rgbFloatString, 'string');
    assert.strictEqual(rgbFloatString, '-0.5, -0.25, 0');
  });

  it('should handle zero values', () => {
    const rgbFloatUnit = new UnitRGBFloat({ r: 0, g: 0, b: 0 });
    const rgbFloatString = rgbFloatUnit.toString();

    assert.strictEqual(typeof rgbFloatString, 'string');
    assert.strictEqual(rgbFloatString, '0, 0, 0');
  });
});
