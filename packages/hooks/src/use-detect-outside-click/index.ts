/**
 * Module dependencies.
 */

import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState
} from 'react';

/**
 * `Result` Props.
 */

type Result = [boolean, Dispatch<SetStateAction<boolean>>];

/**
 * Export `useDetectOutsideClick` hook.
 */

export function useDetectOutsideClick(
  ref: RefObject<HTMLElement> | null | undefined,
  initialState = false
): Result {
  const [active, setActive] = useState(initialState);

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (
        ref?.current &&
        target instanceof Element &&
        !ref?.current?.contains(target)
      ) {
        setActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref]);

  return [active, setActive];
}
