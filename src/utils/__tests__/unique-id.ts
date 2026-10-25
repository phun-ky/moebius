import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { uniqueID } from '../unique-id';

// Math.random is mocked where a test compares IDs, so no test depends on
// chance
describe('uniqueID', () => {
  it('should generate a unique identifier starting with an underscore', () => {
    const result = uniqueID();

    assert.strictEqual(typeof result, 'string');
    assert.ok(result.startsWith('_'));
  });

  it('should use the first nine base 36 digits of a random value', (t) => {
    t.mock.method(Math, 'random', () => 0.123456789);

    assert.strictEqual(
      uniqueID(),
      `_${(0.123456789).toString(36).slice(2, 11)}`
    );
    assert.strictEqual(uniqueID().length, 10);
  });

  it('should generate different identifiers when the random values differ', (t) => {
    const values = [0.1, 0.2];
    let index = 0;

    t.mock.method(Math, 'random', () => values[index++]);

    assert.notStrictEqual(uniqueID(), uniqueID());
  });

  it('should handle the provided example in the documentation', (t) => {
    t.mock.method(Math, 'random', () => 0.987654321);

    assert.match(uniqueID(), /^_[a-z0-9]{9}$/);
  });
});
