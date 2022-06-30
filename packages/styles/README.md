# react-core-styles

A collection of [Untile](https://github.com/untile) react styles utils to build 
web applications based on react.

## Installation

```sh
$ yarn install @untile/react-core-styles
```

## Styles

### `breakpoints`

Breakpoints configuration object.

#### Usage

```jsx
import { breakpoints } from '@untile/react-core-styles/breakpoints';
```

### `Global`

`Global` is a component with global styles. Normalize is a css-normalize content 
to interpolate into styled component.

#### Usage

```jsx
import { Global } from '@untile/react-core-styles/global';

return (
  <Global />
);
```

### `media`

`media` is a style util used to create and interpolate media queries inside a 
styled-component. Breakpoints are based on **breakpoints configuration object**.

#### Usage

```jsx
import { media } from '@untile/react-core-styles/media';

const Foo = styled.div`
  ${media.min.xs`
    color: red;
  `}

  ${media.max.sm`
    background-color: green;
  `}
`;
```

### `svgBackground`

`svgBackground` is a style util used to create an inline svg as a style.

#### Type

```jsx
svgBackground(string): TemplateStringsArray
```

#### Usage

```jsx
import { svgBackground } from '@untile/react-core-styles/svg-background';

const Foo = styled.div`
  ${svgBackground('<svg viewBox="0 0 20 20"><circle cx="60" cy="60" r="50"/></svg>')}
`;
```
