import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitXYZ } from '../xyz';

describe('UnitXYZ', () => {
  it('should create an instance of UnitXYZ', () => {
    const xyzUnit = new UnitXYZ({ x: 0.4, y: 0.6, z: 0.8 });

    assert.strictEqual(typeof xyzUnit, 'object');
    assert.strictEqual(xyzUnit.constructor.name, 'UnitXYZ');
    assert.strictEqual(typeof xyzUnit.x, 'number');
    assert.strictEqual(typeof xyzUnit.y, 'number');
    assert.strictEqual(typeof xyzUnit.z, 'number');
    assert.strictEqual(xyzUnit.x, 0.4);
    assert.strictEqual(xyzUnit.y, 0.6);
    assert.strictEqual(xyzUnit.z, 0.8);
  });

  it('should convert the XYZ unit to a string representation', () => {
    const xyzUnit = new UnitXYZ({ x: 0.4, y: 0.6, z: 0.8 });
    const xyzString = xyzUnit.toString();

    assert.strictEqual(typeof xyzString, 'string');
    assert.strictEqual(xyzString, '0.4, 0.6, 0.8');
  });

  it('should handle negative values', () => {
    const xyzUnit = new UnitXYZ({ x: -0.4, y: -0.6, z: -0.8 });
    const xyzString = xyzUnit.toString();

    assert.strictEqual(typeof xyzString, 'string');
    assert.strictEqual(xyzString, '-0.4, -0.6, -0.8');
  });

  it('should handle zero values', () => {
    const xyzUnit = new UnitXYZ({ x: 0, y: 0, z: 0 });
    const xyzString = xyzUnit.toString();

    assert.strictEqual(typeof xyzString, 'string');
    assert.strictEqual(xyzString, '0, 0, 0');
  });
});
