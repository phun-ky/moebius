import {
  MoebiusCMYKObjectType,
  MoebiusColorValueHexType,
  MoebiusColorValueRgbType,
  MoebiusHSIObjectType,
  MoebiusHSLObjectType,
  MoebiusHSVObjectType,
  MoebiusHWBObjectType,
  MoebiusLABObjectType,
  MoebiusLCHObjectType,
  MoebiusColorInterface,
  MoebiusRGBObjectType,
  MoebiusXYZObjectType,
  MoebiusChromaColorInputType
} from '../types';
import * as CONVERTERS from '../utils/converters';

/**
 * MoebiusColor class representing a color with various formats and conversions.
 *
 * @example
 * ```ts
 * const mColor = new MoebiusColor('#ff9900')
 * ```
 */
export class MoebiusColor implements MoebiusColorInterface {
  color: MoebiusChromaColorInputType;
  name: string;
  hex: MoebiusColorValueHexType;
  rgb: MoebiusColorValueRgbType;
  hsl: MoebiusHSLObjectType;
  hwb: MoebiusHWBObjectType;
  hsv: MoebiusHSVObjectType;
  lab: MoebiusLABObjectType;
  xyz: MoebiusXYZObjectType;
  lch: MoebiusLCHObjectType;
  oklch: MoebiusLCHObjectType;
  hsi: MoebiusHSIObjectType;
  oklab: MoebiusLABObjectType;
  cmyk: MoebiusCMYKObjectType;
  rgbFloat: MoebiusRGBObjectType;
  hslFloat: MoebiusHSLObjectType;

  /**
   * Creates an instance of MoebiusColor.
   * @param {MoebiusChromaColorInputType} color - The hex value of the color.
   * @param {string} name - The name of the color
   *
   * @throws Will throw an error if init has not been run before creating an instance.
   */
  constructor(color: MoebiusChromaColorInputType, name: string) {
    this.color = color;
    this.name = name;

    this.hex = CONVERTERS.toHEX(this.color);
    this.cmyk = CONVERTERS.toCMYK(this.color);
    this.xyz = CONVERTERS.toXYZ(this.color);
    this.hsl = CONVERTERS.toHSL(this.color);
    this.hwb = CONVERTERS.toHWB(this.color);
    this.lab = CONVERTERS.toLAB(this.color);
    this.oklab = CONVERTERS.toOKLAB(this.color);
    this.hsv = CONVERTERS.toHSV(this.color);
    this.lch = CONVERTERS.toLCH(this.color);
    this.oklch = CONVERTERS.toOKLCH(this.color);
    this.hsi = CONVERTERS.toHSI(this.color);
    this.rgb = CONVERTERS.toRGB(this.color);
    this.rgbFloat = CONVERTERS.toFloat(this.color) as MoebiusRGBObjectType;
    this.hslFloat = CONVERTERS.toFloat(
      this.color,
      'hsl'
    ) as MoebiusHSLObjectType;
  }
  /**
   * Converts the color to an object in the specified color space.
   * @param {string} type - The color space type (e.g., 'rgb' or 'hsl').
   * @returns {MoebiusRGBObjectType | MoebiusHSLObjectType} The color object in the specified color space.
   */
  toObject(type?: string): MoebiusRGBObjectType | MoebiusHSLObjectType {
    return CONVERTERS.toObject(this.color, type);
  }
  /**
   * Converts the color to a floating-point representation in the specified color space.
   * @param {string} type - The color space type (e.g., 'rgb' or 'hsl').
   * @returns {MoebiusRGBObjectType | MoebiusHSLObjectType} The floating-point representation of the color in the specified color space.
   */
  toFloat(type?: string): MoebiusRGBObjectType | MoebiusHSLObjectType {
    return CONVERTERS.toFloat(this.color, type);
  }
}
