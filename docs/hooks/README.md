# React Hooks

A collection of [Untile](https://github.com/untile) react hooks to build web
applications.

## Hooks

<details>
  <summary><h3>useBodyScroll</h3></summary>

  This hook updates the body overflow style.

  #### Type

  ```tsx
  useBodyScroll({ off: boolean }): void
  ```

  #### Usage

  ```jsx
  import { useBodyScroll } from '@untile/react-core/hooks/use-body-scroll';

  useBodyScroll({ off: true }); // <body style="overflow:hidden;">
  useBodyScroll({ off: false }); // <body style="">
  ```
</details>

<details>
  <summary><h3>useBreakpoint</h3></summary>

  This hook leverages the use of the breakpoints to return the media-query result.

  #### Type

  ```tsx
  type Value = Breakpoint | number;

  useBreakpoint(min: Value, max?: Value): boolean
  ```

  #### Usage

  ```jsx
  import { useBreakpoint } from '@untile/react-core/hooks/use-breakpoint';

  const isPhoneX = useBreakpoint(0, 375); // Viewports lower than `375px`.
  const isTablet = useBreakpoint('ms', 1023); // Viewports between `ms` and `1023px`.
  const isLargeTablet = useBreakpoint(1024, 'lg'); // Viewports between `1024px` and `lg`.
  const isDesktop = useBreakpoint('md'); // Viewports greater than `md`.
  ```
</details>

<details>
  <summary><h3>useEventListener</h3></summary>
  It leverages the Event listener setup.

  #### Type

  ```tsx
  useEventListener(
    eventName: EventName,
    handler: Handler,
    element?: Element,
    options?: boolean | AddEventListenerOptions
  ): void
  ```

  #### Usage

  ```jsx
  import { useEventListener } from '@untile/react-core/hooks/use-event-listener';

  const ref = useRef<HTMLDivElement>();
  const onWindowResize = () => console.log('window resized!');
  const onScroll = (event: Event) => console.log(event);

  useEventListener('resize', onWindowResize); // no element passed defaults to `window`

  useEventListener('scroll', onScroll, ref);
  ```
</details>

<details>
  <summary><h3>useMediaQuery</h3></summary>

  This hook checks if some media query matches with the window width.

  #### Type

  ```tsx
  useMediaQuery(query: string): boolean
  ```

  #### Usage

  ```jsx
  import { useMediaQuery } from '@untile/react-core/hooks/use-media-query';

  const matches = useMediaQuery('(min-width: 480px)'); // true/false
  ```
</details>

<details>
  <summary><h3>usePrevious</h3></summary>

  Uses a reference for a previous value so it can be used in sync with the previous React state updates.

  #### Type

  ```tsx
  usePrevious<T = any>(value: T): T | undefined
  ```

  #### Usage

  ```jsx
  import { usePrevious } from '@untile/react-core/hooks/use-previous';

  const [state, setState] = useState('initial');
  const previousState = usePrevious(state);
  ```
</details>


<details>
  <summary><h3>useStepper</h3></summary>

  Provides a way to use step by step like in a wizard.

  #### Type

  ```tsx
  useStepper<T = string>(props: StepperProps<T>): StepperResult<T>
  ```

  #### Usage

  ```jsx
  import { useStepper } from '@untile/react-core/hooks/use-stepper';

  useStepper({ steps: [1, 2 , 3] })
  ```
</details>

<details>
  <summary><h3>useToggle</h3></summary>

  State that toggles between boolean states.

  #### Type

  ```tsx
  useToggle(initialState = false): [boolean, () => void]
  ```

  #### Usage

  ```jsx
  import { useToggle } from '@untile/react-core/hooks/use-toggle';

  const [state, toggle] = useToggle();
  ```
</details>
