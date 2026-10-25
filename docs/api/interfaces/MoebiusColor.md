[@phun-ky/moebius](../index.md) / MoebiusColor

# Interface: MoebiusColor

Defined in: [classes/MoebiusColor.ts:26](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L26)

MoebiusColor class representing a color with various formats and conversions.

## Example

```ts
const mColor = new MoebiusColor('#ff9900');
```

## Implements

- [`MoebiusColorInterface`](MoebiusColorInterface.md)

## Properties

### cmyk

```ts
cmyk: MoebiusCMYKObjectType;
```

Defined in: [classes/MoebiusColor.ts:40](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L40)

#### Implementation of

```ts
MoebiusColorInterface.cmyk;
```

---

### color

```ts
color: MoebiusChromaColorInputType;
```

Defined in: [classes/MoebiusColor.ts:27](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L27)

#### Implementation of

```ts
MoebiusColorInterface.color;
```

---

### hex

```ts
hex: `#${string}`;
```

Defined in: [classes/MoebiusColor.ts:29](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L29)

#### Implementation of

```ts
MoebiusColorInterface.hex;
```

---

### hsi

```ts
hsi: MoebiusHSIObjectType;
```

Defined in: [classes/MoebiusColor.ts:38](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L38)

#### Implementation of

```ts
MoebiusColorInterface.hsi;
```

---

### hsl

```ts
hsl: MoebiusHSLObjectType;
```

Defined in: [classes/MoebiusColor.ts:31](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L31)

#### Implementation of

```ts
MoebiusColorInterface.hsl;
```

---

### hslFloat

```ts
hslFloat: MoebiusHSLObjectType;
```

Defined in: [classes/MoebiusColor.ts:42](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L42)

#### Implementation of

```ts
MoebiusColorInterface.hslFloat;
```

---

### hsv

```ts
hsv: MoebiusHSVObjectType;
```

Defined in: [classes/MoebiusColor.ts:33](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L33)

#### Implementation of

```ts
MoebiusColorInterface.hsv;
```

---

### hwb

```ts
hwb: MoebiusHWBObjectType;
```

Defined in: [classes/MoebiusColor.ts:32](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L32)

#### Implementation of

```ts
MoebiusColorInterface.hwb;
```

---

### lab

```ts
lab: MoebiusLABObjectType;
```

Defined in: [classes/MoebiusColor.ts:34](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L34)

#### Implementation of

```ts
MoebiusColorInterface.lab;
```

---

### lch

```ts
lch: MoebiusLCHObjectType;
```

Defined in: [classes/MoebiusColor.ts:36](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L36)

#### Implementation of

```ts
MoebiusColorInterface.lch;
```

---

### name

```ts
name: string;
```

Defined in: [classes/MoebiusColor.ts:28](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L28)

#### Implementation of

```ts
MoebiusColorInterface.name;
```

---

### oklab

```ts
oklab: MoebiusLABObjectType;
```

Defined in: [classes/MoebiusColor.ts:39](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L39)

#### Implementation of

```ts
MoebiusColorInterface.oklab;
```

---

### oklch

```ts
oklch: MoebiusLCHObjectType;
```

Defined in: [classes/MoebiusColor.ts:37](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L37)

#### Implementation of

```ts
MoebiusColorInterface.oklch;
```

---

### rgb

```ts
rgb: `rgb(${number}, ${number}, ${number})`;
```

Defined in: [classes/MoebiusColor.ts:30](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L30)

#### Implementation of

```ts
MoebiusColorInterface.rgb;
```

---

### rgbFloat

```ts
rgbFloat: MoebiusRGBObjectType;
```

Defined in: [classes/MoebiusColor.ts:41](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L41)

#### Implementation of

```ts
MoebiusColorInterface.rgbFloat;
```

---

### xyz

```ts
xyz: MoebiusXYZObjectType;
```

Defined in: [classes/MoebiusColor.ts:35](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L35)

#### Implementation of

```ts
MoebiusColorInterface.xyz;
```

## Methods

### toFloat()

#### Call Signature

```ts
toFloat(type: "hsl"): MoebiusHSLObjectType;
```

Defined in: [classes/MoebiusColor.ts:89](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L89)

Converts the color to a floating-point representation in the specified color space.

##### Parameters

###### type

`"hsl"`

The color space type (e.g., 'rgb' or 'hsl').

##### Returns

[`MoebiusHSLObjectType`](../type-aliases/MoebiusHSLObjectType.md)

The floating-point representation of the color in the specified color space.

#### Call Signature

```ts
toFloat(type?: "rgb"): MoebiusRGBObjectType;
```

Defined in: [classes/MoebiusColor.ts:90](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L90)

Converts the color to a floating-point representation in the specified color space.

##### Parameters

###### type?

`"rgb"`

The color space type (e.g., 'rgb' or 'hsl').

##### Returns

[`MoebiusRGBObjectType`](../type-aliases/MoebiusRGBObjectType.md)

The floating-point representation of the color in the specified color space.

#### Call Signature

```ts
toFloat(type?: string):
  | MoebiusHSLObjectType
  | MoebiusRGBObjectType;
```

Defined in: [classes/MoebiusColor.ts:91](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L91)

Converts the color to a floating-point representation in the specified color space.

##### Parameters

###### type?

`string`

The color space type (e.g., 'rgb' or 'hsl').

##### Returns

| [`MoebiusHSLObjectType`](../type-aliases/MoebiusHSLObjectType.md)
| [`MoebiusRGBObjectType`](../type-aliases/MoebiusRGBObjectType.md)

The floating-point representation of the color in the specified color space.

---

### toObject()

#### Call Signature

```ts
toObject(type: "hsl"): MoebiusHSLObjectType;
```

Defined in: [classes/MoebiusColor.ts:78](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L78)

Converts the color to an object in the specified color space.

##### Parameters

###### type

`"hsl"`

The color space type (e.g., 'rgb' or 'hsl').

##### Returns

[`MoebiusHSLObjectType`](../type-aliases/MoebiusHSLObjectType.md)

The color object in the specified color space.

#### Call Signature

```ts
toObject(type?: "rgb"): MoebiusRGBObjectType;
```

Defined in: [classes/MoebiusColor.ts:79](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L79)

Converts the color to an object in the specified color space.

##### Parameters

###### type?

`"rgb"`

The color space type (e.g., 'rgb' or 'hsl').

##### Returns

[`MoebiusRGBObjectType`](../type-aliases/MoebiusRGBObjectType.md)

The color object in the specified color space.

#### Call Signature

```ts
toObject(type?: string):
  | MoebiusHSLObjectType
  | MoebiusRGBObjectType;
```

Defined in: [classes/MoebiusColor.ts:80](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L80)

Converts the color to an object in the specified color space.

##### Parameters

###### type?

`string`

The color space type (e.g., 'rgb' or 'hsl').

##### Returns

| [`MoebiusHSLObjectType`](../type-aliases/MoebiusHSLObjectType.md)
| [`MoebiusRGBObjectType`](../type-aliases/MoebiusRGBObjectType.md)

The color object in the specified color space.
