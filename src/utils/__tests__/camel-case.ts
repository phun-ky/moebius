import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { camelCase } from '../camel-case';

describe('camelCase', () => {
  it('should convert a string to camel case', () => {
    const result = camelCase('hello world');

    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result, 'helloWorld');
  });

  it('should handle leading and trailing whitespace', () => {
    const result = camelCase('   hello world   ');

    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result, 'helloWorld');
  });

  it('should handle non-alphanumeric characters and accents', () => {
    const result = camelCase('Thís is à strîng wîth spéciãl chàrãctérs');

    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result, 'thisIsAStringWithSpecialCharacters');
  });

  it('should handle consecutive whitespace and replace with a single space', () => {
    const result = camelCase('hello   world');

    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result, 'helloWorld');
  });

  it('should handle an empty string and return an empty string', () => {
    const result = camelCase('');

    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result, '');
  });
});
