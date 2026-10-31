import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import fc from 'fast-check';
import nearestColor from 'nearest-color';

import { matchNearestColor } from '../nearest-color';

const hex6 = fc
  .array(fc.integer({ min: 0, max: 255 }), { minLength: 3, maxLength: 3 })
  .map(
    (channels) =>
      `#${channels.map((channel) => channel.toString(16).padStart(2, '0')).join('')}`
  );
const hex3 = fc
  .array(fc.integer({ min: 0, max: 15 }), { minLength: 3, maxLength: 3 })
  .map((digits) => `#${digits.map((digit) => digit.toString(16)).join('')}`);

describe('matchNearestColor', () => {
  it('returns the nearest name, its hex and the distance', () => {
    const match = matchNearestColor({ Gold: '#ffd700', Navy: '#000080' });

    assert.deepEqual(match('#ffcc00'), {
      name: 'Gold',
      value: '#ffd700',
      distance: 11
    });
    assert.deepEqual(match('#000080'), {
      name: 'Navy',
      value: '#000080',
      distance: 0
    });
  });

  it('expands #rgb names', () => {
    assert.equal(matchNearestColor({ Red: '#f00' })('#ff0000').distance, 0);
  });

  it('picks the first name on a tie', () => {
    const match = matchNearestColor({ First: '#000000', Second: '#000000' });

    assert.equal(match('#010101').name, 'First');
  });

  it('works with a map without a prototype', () => {
    const names: Record<string, string> = Object.assign(Object.create(null), {
      constructor: '#123456'
    });

    assert.equal(matchNearestColor(names)('#123456').name, 'constructor');
  });

  it('gives the same match as nearest-color for any names and color', () => {
    fc.assert(
      fc.property(
        fc.dictionary(
          fc.string({ minLength: 1 }).filter((name) => name !== '__proto__'),
          fc.oneof(hex6, hex3),
          { minKeys: 1, maxKeys: 30 }
        ),
        hex6,
        (names, color) => {
          const ours = matchNearestColor(names)(color);
          const theirs = nearestColor.from(names)(color);

          assert.equal(ours.name, theirs.name);
          assert.equal(ours.value, theirs.value);
          assert.equal(ours.distance, theirs.distance);
        }
      ),
      { numRuns: 500 }
    );
  });
});
