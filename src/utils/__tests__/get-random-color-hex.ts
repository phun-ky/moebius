import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import fc from 'fast-check';

import { getRandomColorHex } from '../get-random-color-hex';

// Math.random is mocked, so no test depends on chance: 1,000 real random
// colors contain a duplicate in about 3% of runs
const sequence = (values: number[]) => {
  let index = 0;

  return () => values[index++ % values.length];
};

describe('getRandomColorHex', () => {
  it('should generate a random hexadecimal color', () => {
    const result = getRandomColorHex();

    assert.strictEqual(typeof result, 'string');
    assert.match(result, /^#[0-9a-f]{6}$/);
  });

  it('should use one random value per hex digit', (t) => {
    const random = t.mock.method(
      Math,
      'random',
      sequence([0, 1 / 16, 2 / 16, 3 / 16, 4 / 16, 5 / 16])
    );

    assert.strictEqual(getRandomColorHex(), '#012345');
    assert.strictEqual(random.mock.callCount(), 6);
  });

  it('should cover the whole range, from #000000 to #ffffff', (t) => {
    t.mock.method(Math, 'random', () => 0);
    assert.strictEqual(getRandomColorHex(), '#000000');

    t.mock.method(Math, 'random', () => 1 - Number.EPSILON);
    assert.strictEqual(getRandomColorHex(), '#ffffff');
  });

  it('should generate different colors when the random values differ', (t) => {
    t.mock.method(
      Math,
      'random',
      sequence([...Array(6).fill(0.1), ...Array(6).fill(0.9)])
    );

    assert.notStrictEqual(getRandomColorHex(), getRandomColorHex());
  });

  it('should map every sequence of random values to its hex digits', (t) => {
    fc.assert(
      fc.property(
        fc.array(
          fc.double({ min: 0, max: 1, maxExcluded: true, noNaN: true }),
          {
            minLength: 6,
            maxLength: 6
          }
        ),
        (values) => {
          const random = t.mock.method(Math, 'random', sequence(values));
          const expected = `#${values.map((value) => Math.floor(value * 16).toString(16)).join('')}`;

          assert.strictEqual(getRandomColorHex(), expected);
          random.mock.restore();
        }
      )
    );
  });
});
