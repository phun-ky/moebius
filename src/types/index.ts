import { MoebiusColor } from '../classes/MoebiusColor';
import { MoebiusPalettes } from '../classes/MoebiusPalettes';
import { MoebiusSVGHelper } from '../classes/MoebiusSVGHelper';

export type MoebiusInterpolationMode =
  | 'hcl'
  | 'hsi'
  | 'hsl'
  | 'hsv'
  | 'lab'
  | 'lch'
  | 'lrgb'
  | 'oklab'
  | 'oklch'
  | 'rgb';

export type MoebiusPaletteType =
  | 'protanomaly'
  | 'protanopia'
  | 'deuteranomaly'
  | 'deuteranopia'
  | 'tritanomaly'
  | 'tritanopia'
  | 'achromatomaly'
  | 'achromatopsia';

/**
 * Represents a color object with various color representations.
 */
export interface MoebiusColorInterface {
  color: MoebiusChromaColorInputType;
  name: string;
  hex: MoebiusColorValueHexType;
  rgb: MoebiusColorValueRgbType;
  hsl: MoebiusHSLObjectType;
  hslFloat: MoebiusHSLObjectType;
  rgbFloat: MoebiusRGBObjectType;
  hwb: MoebiusHWBObjectType;
  hsv: MoebiusHSVObjectType;
  lab: MoebiusLABObjectType;
  xyz: MoebiusXYZObjectType;
  lch: MoebiusLCHObjectType;
  oklch: MoebiusLCHObjectType;
  hsi: MoebiusHSIObjectType;
  oklab: MoebiusLABObjectType;
  cmyk: MoebiusCMYKObjectType;
}

/**
 * Describes a color with multiple representations and metadata.
 */
export type MoebiusReturnType = Promise<{
  MoebiusColor: typeof MoebiusColor;
  MoebiusPalettes: typeof MoebiusPalettes;
  MoebiusSVGHelper: typeof MoebiusSVGHelper;
}>;

/**
 * Represents a full palette generated from a base/secondary color combination.
 */
export interface MoebiusPaletteInterface {
  baseColor: MoebiusColorInterface;
  secondaryColor: MoebiusColorInterface;
  colors?: MoebiusPaletteColorsInterface;
  themes?: MoebiusThemeColorsInterface;
  defaultOptions: MoebiusPaletteDefaultOptionsType;
  options: MoebiusPaletteOptionsType;
  all: MoebiusColorValueHexType[];
  accents: MoebiusPaletteAccentColorsInterface;
}

/**
 * Defines generated palette schemes (e.g., split, triadic).
 */
export interface MoebiusPaletteColorsInterface {
  interpolate: MoebiusColorValueHexType[];
  luminanceShift: MoebiusColorValueHexType[];
  monochromatic: MoebiusColorValueHexType[];
  complement: MoebiusColorValueHexType[];
  split: MoebiusColorValueHexType[];
  triadic: MoebiusColorValueHexType[];
  tetradic: MoebiusColorValueHexType[];
  pentadic: MoebiusColorValueHexType[];
  hexadic: MoebiusColorValueHexType[];
  analogous: MoebiusColorValueHexType[];
}

/**
 * Represents a palette of colors with different themes.
 */
export interface MoebiusThemeColorsInterface {
  darkMode: Record<string, MoebiusColorValueHexType[]>;
}

/**
 * Represents a palette of accent colors with different schemes.
 */
export interface MoebiusPaletteAccentColorsInterface {
  interpolate: MoebiusColorValueHexType[][];
  luminanceShift: MoebiusColorValueHexType[][];
  monochromatic: MoebiusColorValueHexType[][];
  complement: MoebiusColorValueHexType[][];
  split: MoebiusColorValueHexType[][];
  triadic: MoebiusColorValueHexType[][];
  tetradic: MoebiusColorValueHexType[][];
  pentadic: MoebiusColorValueHexType[][];
  hexadic: MoebiusColorValueHexType[][];
  analogous: MoebiusColorValueHexType[][];
}

/**
 * Represents options for generating a color palette.
 */
export type MoebiusPaletteOptionsType = {
  baseColor: MoebiusColorInterface;
  secondaryColor: MoebiusColorInterface;
  divergentColor?: MoebiusColorValueHexType;
  diverging?: boolean;
  bezier?: boolean;
  randomOffset?: boolean;
  correctLightness?: boolean;
  noDuplicates?: boolean;
  colorScaleMode?: MoebiusInterpolationMode;
  divergingColor?: string;
  reverseDirection?: boolean;
  numberOfColors?: number;
};

/**
 * Represents default options for generating a color palette.
 */
export type MoebiusPaletteDefaultOptionsType = {
  divergentColor?: MoebiusColorValueHexType;
  diverging: boolean;
  bezier: boolean;
  randomOffset: boolean;
  correctLightness: boolean;
  noDuplicates: boolean;
  colorScaleMode: MoebiusInterpolationMode;
  reverseDirection: boolean;
  numberOfColors?: number;
};

/**
 * A hex-based color string, e.g., '#ffcc00'.
 */
export type MoebiusColorValueHexType = `#${string}`;

/**
 * HSL color value string, e.g., 'hsl(240, 100%, 50%)'.
 */
export type MoebiusColorValueHslType = `hsl(${number}, ${string}, ${string})`;

/**
 * HSLA color value string, e.g., 'hsl(240, 100%, 50%, 0.5)'.
 */
export type MoebiusColorValueHslaType =
  `hsl(${number}, ${string}, ${string}, ${number})`;

/**
 * RGB color value string, e.g., 'rgb(255, 0, 0)'.
 */
export type MoebiusColorValueRgbType = `rgb(${number}, ${number}, ${number})`;

/**
 * RGBA color value string, e.g., 'rgb(255, 0, 0, 0.75)'.
 */
export type MoebiusColorValueRgbaType =
  `rgb(${number}, ${number}, ${number}, ${number})`;

/**
 * RGB color object.
 */
export type MoebiusRGBObjectType = { r: number; g: number; b: number };

/**
 * HSL color object.
 */
export type MoebiusHSLObjectType = { h: number; s: number; l: number };

/**
 * HSV color object.
 */
export type MoebiusHSVObjectType = { h: number; s: number; v: number };

/**
 * HSI color object.
 */
export type MoebiusHSIObjectType = { h: number; s: number; i: number };

/**
 * HWB color object.
 */
export type MoebiusHWBObjectType = { h: number; w: number; b: number };

/**
 * LAB color object.
 */
export type MoebiusLABObjectType = { l: number; a: number; b: number };

/**
 * LCH color object.
 */
export type MoebiusLCHObjectType = { l: number; c: number; h: number };

/**
 * XYZ color object.
 */
export type MoebiusXYZObjectType = { x: number; y: number; z: number };

/**
 * CMYK color object.
 */
export type MoebiusCMYKObjectType = {
  c: number;
  m: number;
  y: number;
  k: number;
};

/**
 * A named color + metadata for nearest-color matching source.
 */
export interface NearestColorColorSpecInterface {
  name: string;
  source: string;
  rgb: MoebiusRGBObjectType;
}

/**
 * A matched color name and its RGB/hex representation.
 */
export interface NearestColorColorMatchInterface {
  name: string;
  value: string;
  rgb: MoebiusRGBObjectType;
}

/**
 * Input types accepted by Chroma or Moebius logic.
 */
export type MoebiusChromaColorInputType =
  | MoebiusCMYKObjectType
  | MoebiusLCHObjectType
  | MoebiusHSLObjectType
  | MoebiusColorValueHexType
  | string;

/**
 * Represents the mouse event object for an element.
 * @template T - Type of the element used as a target.
 */
export type MouseEventType<T> = MouseEvent & {
  target: T & {
    files?: FileList | null;
    id: string;
    parentElement: Element | null;
    value?: string | null;
  };
  offsetX?: number;
  offsetY?: number;
  currentTarget: HTMLElement & {
    documentElement: HTMLElement;
  };
};
