# react-core-utils

A collection of [Untile](https://github.com/untile) utilities to build web 
applications based on typescript.

## Installation

```sh
$ yarn install @untile/react-core-utils
```

## Utils

### `isExternalUrl`

This function checks if the string path is an external url.

#### Type

```tsx
isExternalUrl(url: string): boolean
```

#### Usage

```jsx
import { isExternalUrl } from '@untile/react-core-utils/is-external-url';

isExternalUrl('http://foo.bar'); // true
isExternalUrl('/foo/bar'); // false
```
