import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { MoebiusRGBObjectType } from '../../types';
import { MoebiusColor } from '../MoebiusColor';

describe('MoebiusColor', () => {
  it('should create an instance of MoebiusColor', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);

    assert.strictEqual(mColor instanceof MoebiusColor, true);
    assert.strictEqual(mColor.color, hexColor);
    assert.strictEqual(mColor.name, colorName);
  });

  it('should convert color to hex format', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);

    assert.strictEqual(mColor.hex, hexColor);
  });

  it('should convert color to RGB format', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);

    assert.strictEqual(typeof mColor.rgbFloat, 'object');
    assert.strictEqual(Object.keys(mColor.rgbFloat).length, 3);
    assert.strictEqual(typeof mColor.rgbFloat.r, 'number');
    assert.strictEqual(typeof mColor.rgbFloat.g, 'number');
    assert.strictEqual(typeof mColor.rgbFloat.b, 'number');
  });

  it('should convert color to HSL format', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);

    assert.strictEqual(typeof mColor.hsl, 'object');
    assert.strictEqual(Object.keys(mColor.hsl).length, 3);
    assert.strictEqual(typeof mColor.hsl.h, 'number');
    assert.strictEqual(typeof mColor.hsl.s, 'number');
    assert.strictEqual(typeof mColor.hsl.l, 'number');
  });

  it('should convert color to HSV format', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);

    assert.strictEqual(typeof mColor.hsv, 'object');
    assert.strictEqual(Object.keys(mColor.hsv).length, 3);
    assert.strictEqual(typeof mColor.hsv.h, 'number');
    assert.strictEqual(typeof mColor.hsv.s, 'number');
    assert.strictEqual(typeof mColor.hsv.v, 'number');
  });

  it('should convert color to LAB format', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);

    assert.strictEqual(typeof mColor.lab, 'object');
    assert.strictEqual(Object.keys(mColor.lab).length, 3);
    assert.strictEqual(typeof mColor.lab.l, 'number');
    assert.strictEqual(typeof mColor.lab.a, 'number');
    assert.strictEqual(typeof mColor.lab.b, 'number');
  });

  it('should convert color to CMYK format', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);

    assert.strictEqual(typeof mColor.cmyk, 'object');
    assert.strictEqual(Object.keys(mColor.cmyk).length, 4);
    assert.strictEqual(typeof mColor.cmyk.c, 'number');
    assert.strictEqual(typeof mColor.cmyk.m, 'number');
    assert.strictEqual(typeof mColor.cmyk.y, 'number');
    assert.strictEqual(typeof mColor.cmyk.k, 'number');
  });

  it('should convert color to XYZ format', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);

    assert.strictEqual(typeof mColor.xyz, 'object');
    assert.strictEqual(Object.keys(mColor.xyz).length, 3);
    assert.strictEqual(typeof mColor.xyz.x, 'number');
    assert.strictEqual(typeof mColor.xyz.y, 'number');
    assert.strictEqual(typeof mColor.xyz.z, 'number');
  });

  it('should convert color to LCH format', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);

    assert.strictEqual(typeof mColor.lch, 'object');
    assert.strictEqual(Object.keys(mColor.lch).length, 3);
    assert.strictEqual(typeof mColor.lch.l, 'number');
    assert.strictEqual(typeof mColor.lch.c, 'number');
    assert.strictEqual(typeof mColor.lch.h, 'number');
  });

  it('should convert color to HSI format', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);

    assert.strictEqual(typeof mColor.hsi, 'object');
    assert.strictEqual(Object.keys(mColor.hsi).length, 3);
    assert.strictEqual(typeof mColor.hsi.h, 'number');
    assert.strictEqual(typeof mColor.hsi.s, 'number');
    assert.strictEqual(typeof mColor.hsi.i, 'number');
  });

  it('should convert color to RGBFloat format', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);

    assert.strictEqual(typeof mColor.rgbFloat, 'object');
    assert.strictEqual(Object.keys(mColor.rgbFloat).length, 3);
    assert.strictEqual(typeof mColor.rgbFloat.r, 'number');
    assert.strictEqual(typeof mColor.rgbFloat.g, 'number');
    assert.strictEqual(typeof mColor.rgbFloat.b, 'number');
  });

  it('should convert color to HSLFloat format', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);

    assert.strictEqual(typeof mColor.hslFloat, 'object');
    assert.strictEqual(Object.keys(mColor.hslFloat).length, 3);
    assert.strictEqual(typeof mColor.hslFloat.h, 'number');
    assert.strictEqual(typeof mColor.hslFloat.s, 'number');
    assert.strictEqual(typeof mColor.hslFloat.l, 'number');
  });

  it('should convert color to specified color space object', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);
    const rgbObject = mColor.toObject('rgb') as MoebiusRGBObjectType;

    assert.strictEqual(typeof rgbObject, 'object');
    assert.strictEqual(Object.keys(rgbObject).length, 3);
    assert.strictEqual(typeof rgbObject.r, 'number');
    assert.strictEqual(typeof rgbObject.g, 'number');
    assert.strictEqual(typeof rgbObject.b, 'number');
  });

  it('should convert color to specified floating-point representation', () => {
    const hexColor = '#ff9900';
    const colorName = 'Orange';
    const mColor = new MoebiusColor(hexColor, colorName);
    const rgbFloatRepresentation = mColor.toFloat('rgb') as MoebiusRGBObjectType;

    assert.strictEqual(typeof rgbFloatRepresentation, 'object');
    assert.strictEqual(Object.keys(rgbFloatRepresentation).length, 3);
    assert.strictEqual(typeof rgbFloatRepresentation.r, 'number');
    assert.strictEqual(typeof rgbFloatRepresentation.g, 'number');
    assert.strictEqual(typeof rgbFloatRepresentation.b, 'number');
  });
});
