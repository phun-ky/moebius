[@phun-ky/moebius](../index.md) / MouseEventType

# Type Alias: MouseEventType\<T>

```ts
type MouseEventType<T> = MouseEvent & {
  currentTarget: HTMLElement & {
    documentElement: HTMLElement;
  };
  offsetX?: number;
  offsetY?: number;
  target: T & {
    files?: FileList | null;
    id: string;
    parentElement: Element | null;
    value?: string | null;
  };
};
```

Defined in: [types/index.ts:253](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L253)

Represents the mouse event object for an element.

## Type Declaration

### currentTarget

```ts
currentTarget: HTMLElement & {
  documentElement: HTMLElement;
};
```

#### Type Declaration

##### documentElement

```ts
documentElement: HTMLElement;
```

### offsetX?

```ts
optional offsetX: number;
```

### offsetY?

```ts
optional offsetY: number;
```

### target

```ts
target: T & {
  files?:   | FileList
     | null;
  id: string;
  parentElement: Element | null;
  value?: string | null;
};
```

#### Type Declaration

##### files?

```ts
optional files:
  | FileList
  | null;
```

##### id

```ts
id: string;
```

##### parentElement

```ts
parentElement: Element | null;
```

##### value?

```ts
optional value: string | null;
```

## Type Parameters

### T

`T`

Type of the element used as a target.
