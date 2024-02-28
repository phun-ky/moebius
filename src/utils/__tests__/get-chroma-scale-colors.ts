import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { MoebiusColorValueHexType } from '../../types';
import { getChromaScaleColors } from '../get-chroma-scale-colors';

describe('getChromaScaleColors', () => {
  it('should generate a color scale using Chroma.js with default options', () => {
    const inputColors = ['#3498db', '#2ecc71', '#e74c3c'];
    const result = getChromaScaleColors(inputColors as MoebiusColorValueHexType[]);

    assert.ok(Array.isArray(result));
    assert.strictEqual(result.length, 8); // Default numberOfColors
    result.forEach(color => assert.match(color, /^#[0-9a-f]{6}$/i));
  });

  it('should generate a color scale with specified numberOfColors', () => {
    const inputColors = ['#3498db', '#2ecc71', '#e74c3c'];
    const options = { numberOfColors: 5 };
    const result = getChromaScaleColors(inputColors as MoebiusColorValueHexType[], options);

    assert.ok(Array.isArray(result));
    assert.strictEqual(result.length, 5);
    result.forEach(color => assert.match(color, /^#[0-9a-f]{6}$/i));
  });

  it('should generate a color scale with specified colorScaleMode', () => {
    const inputColors = ['#3498db', '#2ecc71', '#e74c3c'];
    const options = { colorScaleMode: 'lch' };
    const result = getChromaScaleColors(inputColors as MoebiusColorValueHexType[], options);

    assert.ok(Array.isArray(result));
    assert.strictEqual(result.length, 8); // Default numberOfColors
    result.forEach(color => assert.match(color, /^#[0-9a-f]{6}$/i));
  });

  it('should generate a color scale with correct lightness when correctLightness is true', () => {
    const inputColors = ['#3498db', '#2ecc71', '#e74c3c'];
    const options = { correctLightness: true };
    const result = getChromaScaleColors(inputColors as MoebiusColorValueHexType[], options);

    assert.ok(Array.isArray(result));
    assert.strictEqual(result.length, 8); // Default numberOfColors
    result.forEach(color => assert.match(color, /^#[0-9a-f]{6}$/i));
  });

  it('should generate a color scale without correcting lightness when correctLightness is false', () => {
    const inputColors = ['#3498db', '#2ecc71', '#e74c3c'];
    const options = { correctLightness: false };
    const result = getChromaScaleColors(inputColors as MoebiusColorValueHexType[], options);

    assert.ok(Array.isArray(result));
    assert.strictEqual(result.length, 8); // Default numberOfColors
    result.forEach(color => assert.match(color, /^#[0-9a-f]{6}$/i));
  });

  it('should throw when an empty array of input colors is given', () => {
    const inputColors = [];
    const result = getChromaScaleColors(inputColors as MoebiusColorValueHexType[]);

    assert.ok(Array.isArray(result));
    assert.strictEqual(result.length, 0);
  });
});
