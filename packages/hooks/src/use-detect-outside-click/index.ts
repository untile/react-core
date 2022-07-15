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
 * `Options` type.
 */

type Options = {
  initialState?: boolean;
};

/**
 * Export `useDetectOutsideClick` hook.
 */

export function useDetectOutsideClick(
  ref: RefObject<any>,
  { initialState }: Options
): Result {
  const [active, setActive] = useState<boolean>(!!initialState);

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (ref?.current && !ref?.current?.contains(target)) {
        setActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [active, ref]);

  return [active, setActive];
}
