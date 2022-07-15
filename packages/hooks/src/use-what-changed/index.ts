import { useEffect, useState } from 'react';
import { usePrevious } from '../use-previous';

export function useWhatChanged(props: Record<string, any>) {
  const previousProps = usePrevious(props);
  const [changedProps, setChangedProps] = useState<Record<string, any>>({});

  useEffect(() => {
    if (previousProps) {
      const changedProps: Record<string, any> = {};

      Object.keys({ ...previousProps, ...props }).forEach(key => {
        if (previousProps[key] !== props[key]) {
          changedProps[key] = [previousProps[key], props[key]];
        }
      });

      setChangedProps(changedProps);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify({ ...previousProps, ...props })]);

  return changedProps;
}
