# Getting Started

## See it in action online

Check out the online generator version of **Möbius** at [https://moebius.wtf](https://moebius.wtf)

## Installation

### Prerequisites for package install

- [Node.js](https://nodejs.org/) version 22.9.0 or higher
- npm version 11.0.0 or higher

::: info

**Möbius** is an ESM package

:::

To use it, install it with:

::: code-group

```shell [npm]
npm i --save @phun-ky/moebius
```

```shell [yarn]
yarn add @phun-ky/moebius
```

:::

## Quick Usage

Import and run the required function:

```ts
import Moebius from '@phun-ky/moebius';

const { MoebiusColor, MoebiusPalettes } = await Moebius();

const palette = new MoebiusPalettes({
  baseColor: new MoebiusColor('#1e90ff')
});

console.log(palette.colors.interpolate); // ['#1e90ff', '#3298d8', ...]
```
