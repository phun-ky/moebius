import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { normalizeRGBInput, normalizeLABInput} from '../normalize-color-units';

describe('normalizeRGBInput', () => {
  it('should normalize an RGB input value below or equal to 0.04045', () => {
    const result = normalizeRGBInput(20);
    const desired = 20 / 255 / 12.92;
    const diff = result - desired;

    assert.strictEqual(typeof result, 'number');
    assert.ok(diff < 0.002 );
  });

  it('should normalize an RGB input value above 0.04045', () => {
    const result = normalizeRGBInput(200);
    const desired = Math.pow((200 / 255 + 0.055) / 1.055, 2.4);
    const diff = result - desired;

    assert.strictEqual(typeof result, 'number');
    assert.ok(diff < 0.002 );
  });
});

describe('normalizeLABInput', () => {
  it('should normalize a LAB input value greater than 0.008856452', () => {
    const result = normalizeLABInput(0.01);

    assert.strictEqual(typeof result, 'number');
    assert.strictEqual(result, Math.pow(0.01, 1 / 3));
  });

  it('should normalize a LAB input value less than or equal to 0.008856452', () => {
    const result = normalizeLABInput(0.008);

    assert.strictEqual(typeof result, 'number');
    assert.strictEqual(result, 0.008 / 0.12841855 + 0.137931034);
  });
});
