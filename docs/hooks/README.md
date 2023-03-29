# React Hooks

A collection of [Untile](https://github.com/untile) react hooks to build web 
applications.

## Hooks

### `useBodyScroll`

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

### `useEventListener`

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

### `useMediaQuery`

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

### `usePrevious`

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

### `useStepper`

#### Type

```tsx
useStepper<T = string>(props: StepperProps<T>): StepperResult<T>
```

#### Usage

```jsx
import { useStepper } from '@untile/react-core/hooks/use-stepper';

useStepper({ steps: [1, 2 , 3] })
```

### `useToggle`

#### Type

```tsx
useToggle(initialState = false): [boolean, () => void]
```

#### Usage

```jsx
import { useToggle } from '@untile/react-core/hooks/use-toggle';

const [state, toggle] = useToggle();
```
