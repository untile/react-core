# react-core-hooks

A collection of [Untile](https://github.com/untile) react hooks to build web 
applications.

## Installation

```sh
$ yarn install @untile/react-core-hooks
```

## Hooks

### `useBodyScroll`

This hook updates the body overflow style.

#### Type

```tsx
useBodyScroll({ off: boolean }): void
```

#### Usage

```jsx
import { useBodyScroll } from '@untile/react-core-hooks/use-body-scroll';

useBodyScroll({ off: true }); // <body style="overflow:hidden;">
useBodyScroll({ off: false }); // <body style="">
```

### `useMediaQuery`

This hook checks if some media query matches with the window width.

#### Type

```tsx
useMediaQuery(query: string): boolean
```

#### Usage

```jsx
import { useMediaQuery } from '@untile/react-core-hooks/use-media-query';

const matches = useMediaQuery('(min-width: 480px)'); // true/false
```
