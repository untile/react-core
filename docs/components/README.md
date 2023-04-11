# 📦 React Components

A collection of [Untile](https://github.com/untile) react components to build
web applications based on react.

<details>
  <summary><h3>RawHtml</h3></summary>

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
  import { RawHtml } from '@untile/react-core/components/raw-html';

  <RawHtml element={'div'}>
    {`foo<br>bar`}
  </RawHtml>
  ```
</details>

<details>
  <summary><h3>Svg</h3></summary>

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
  import { Svg } from '@untile/react-core/components/svg';
  import svgIcon from './foo/bar.svg';

  <Svg
    color={'red'}
    icon={svgIcon}
    size={'20px'}
  />
  ```
</details>
