import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitCMYK } from '../cmyk';

describe('UnitCMYK', () => {
  it('should create an instance of UnitCMYK', () => {
    const cmykUnit = new UnitCMYK({ c: 0.2, m: 0.4, y: 0.6, k: 0.1 });

    assert.strictEqual(typeof cmykUnit, 'object');
    assert.strictEqual(cmykUnit.constructor.name, 'UnitCMYK');
    assert.strictEqual(typeof cmykUnit.c, 'number');
    assert.strictEqual(typeof cmykUnit.m, 'number');
    assert.strictEqual(typeof cmykUnit.y, 'number');
    assert.strictEqual(typeof cmykUnit.k, 'number');
    assert.strictEqual(cmykUnit.c, 0.2);
    assert.strictEqual(cmykUnit.m, 0.4);
    assert.strictEqual(cmykUnit.y, 0.6);
    assert.strictEqual(cmykUnit.k, 0.1);
  });

  it('should convert the CMYK unit to a string representation', () => {
    const cmykUnit = new UnitCMYK({ c: 0.2, m: 0.4, y: 0.6, k: 0.1 });
    const cmykString = cmykUnit.toString();

    assert.strictEqual(typeof cmykString, 'string');
    assert.strictEqual(cmykString, '0.2, 0.4, 0.6, 0.1');
  });

  it('should handle zero values for CMYK', () => {
    const cmykUnit = new UnitCMYK({ c: 0, m: 0, y: 0, k: 0 });
    const cmykString = cmykUnit.toString();

    assert.strictEqual(typeof cmykString, 'string');
    assert.strictEqual(cmykString, '0, 0, 0, 0');
  });

  it('should handle maximum values for CMYK', () => {
    const cmykUnit = new UnitCMYK({ c: 1, m: 1, y: 1, k: 1 });
    const cmykString = cmykUnit.toString();

    assert.strictEqual(typeof cmykString, 'string');
    assert.strictEqual(cmykString, '1, 1, 1, 1');
  });
});
