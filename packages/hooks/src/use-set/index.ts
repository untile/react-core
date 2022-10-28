import { useCallback, useState } from 'react';

type Return<T> = [
  state: Set<T>,
  actions: {
    add: (value: T) => void;
    clear: () => void;
    remove: (value: T) => void;
    set: (value: Set<T>) => void;
  }
];

export function useSet<T = string>(initialState: Set<T>): Return<T> {
  const [state, setState] = useState<Set<T>>(initialState);
  const add = useCallback((value: T) => {
    setState(current => {
      const newSet = new Set(current);

      newSet.add(value);

      return newSet;
    });
  }, []);

  const clear = useCallback(() => {
    setState(current => {
      const newSet = new Set(current);

      newSet.clear();

      return newSet;
    });
  }, []);

  const remove = useCallback((value: T) => {
    setState(current => {
      const newSet = new Set(current);

      newSet.delete(value);

      return newSet;
    });
  }, []);

  return [state, { add, clear, remove, set: setState }];
}
