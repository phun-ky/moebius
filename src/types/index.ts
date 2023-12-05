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

export interface MoebiusPaletteInterface {
  baseColor: MoebiusColorInterface;
  secondaryColor: MoebiusColorInterface;
  colors: Record<string, unknown> | MoebiusPaletteColorsInterface;
  defaultOptions: MoebiusPaletteDefaultOptionsType;
  options: MoebiusPaletteOptionsType;
  all: MoebiusColorValueHexType[];
  accents: MoebiusPaletteAccentColorsInterface;
}

/**
 * Represents a palette of colors with different schemes.
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
  colorScaleMode?: string;
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
  colorScaleMode: string;
  reverseDirection: boolean;
  numberOfColors?: number;
};

/**
 * Represents a color value in hexadecimal format.
 */
export type MoebiusColorValueHexType = `#${string}`;

/**
 * Represents a color value in HSL format.
 */
export type MoebiusColorValueHslType = `hsl(${number}, ${string}, ${string})`;

/**
 * Represents a color value in HSLA format.
 */
export type MoebiusColorValueHslaType =
  `hsl(${number}, ${string}, ${string}, ${number})`;

/**
 * Represents a color value in RGB format.
 */
export type MoebiusColorValueRgbType = `rgb(${number}, ${number}, ${number})`;

/**
 * Represents a color value in RGBA format.
 */
export type MoebiusColorValueRgbaType =
  `rgb(${number}, ${number}, ${number}, ${number})`;

/**
 * Represents an RGB color object.
 */
export type MoebiusRGBObjectType = { r: number; g: number; b: number };

/**
 * Represents an HSL color object.
 */
export type MoebiusHSLObjectType = { h: number; s: number; l: number };

/**
 * Represents an HSV color object.
 */
export type MoebiusHSVObjectType = { h: number; s: number; v: number };

/**
 * Represents an LCH color object.
 */
export type MoebiusLCHObjectType = { l: number; c: number; h: number };

/**
 * Represents an HSI color object.
 */
export type MoebiusHSIObjectType = { h: number; s: number; i: number };

/**
 * Represents an XYZ color object.
 */
export type MoebiusXYZObjectType = { x: number; y: number; z: number };

/**
 * Represents an HWB color object.
 */
export type MoebiusHWBObjectType = { h: number; w: number; b: number };

/**
 * Represents a LAB color object.
 */
export type MoebiusLABObjectType = { l: number; a: number; b: number };

/**
 * Represents a CMYK color object.
 */
export type MoebiusCMYKObjectType = {
  c: number;
  m: number;
  y: number;
  k: number;
};

/**
 * Represents a color specification for nearest color matching.
 */
export interface NearestColorColorSpecInterface {
  name: string; //  A name for the color, e.g., 'red'
  source: string; // The hex-based color string, e.g., '#FF0'
  rgb: MoebiusRGBObjectType; //  The NearestColorRGB color values
}

/**
 * Represents a color match for nearest color matching.
 */
export interface NearestColorColorMatchInterface {
  name: string; //The name of the matched color, e.g., 'red'
  value: string; // The hex-based color string, e.g., '#FF0'
  rgb: MoebiusRGBObjectType; //  The NearestColorRGB color values
}

export type MoebiusChromaColorInputType =
  | MoebiusCMYKObjectType
  | MoebiusLCHObjectType
  | MoebiusHSLObjectType
  | MoebiusColorValueHexType
  | string;
