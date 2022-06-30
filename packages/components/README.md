# react-core-components

A collection of [Untile](https://github.com/untile) react components to build 
web applications based on react.

## Installation

```sh
$ yarn install @untile/react-core-components
```

## Components

### `RawHtml`

#### Type

```tsx
interface RawHtmlProps {
  children: ReactNode;
  className?: string;
  element?: string;
}
```

#### Usage

```jsx
import { RawHtml } from '@untile/react-core-hooks/raw-html';

<RawHtml element={'div'}>
  {`foo<br>bar`}
</RawHtml>
```

### `Svg`

#### Type

```tsx
interface SvgProps {
  className?: string;
  color?: string;
  icon: string;
  size: string | unknown;
}
```

#### Usage

```jsx
import { Svg } from '@untile/react-core-hooks/svg';
import svgIcon from './foo/bar.svg';

<Svg
  color={'red'}
  icon={svgIcon}
  size={'20px'}
/>
```
