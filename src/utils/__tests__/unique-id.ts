import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { uniqueID } from '../unique-id';

describe('uniqueID', () => {
  it('should generate a unique identifier starting with an underscore', () => {
    const result = uniqueID();

    assert.strictEqual(typeof result, 'string');
    assert.ok(result.startsWith('_'));
  });

  it('should generate unique identifiers of the correct length', () => {
    const result = uniqueID();

    assert.strictEqual(result.length, 10);
  });

  it('should generate different unique identifiers on successive calls', () => {
    const id1 = uniqueID();
    const id2 = uniqueID();

    assert.notStrictEqual(id1, id2);
  });

  it('should handle multiple calls in quick succession', () => {
    const ids = new Set();

    for (let i = 0; i < 1000; i++) {
      const id = uniqueID();

      ids.add(id);
    }

    assert.strictEqual(ids.size, 1000);
  });

  it('should handle the provided example in the documentation', () => {
    const id = uniqueID();

    assert.match(id, /^_[a-z0-9]{9}$/);
  });
});
