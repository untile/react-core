/**
 * Module dependencies.
 */

import { RefObject, useEffect } from 'react';

/**
 * `EventName` type.
 */

type EventName =
  | keyof DocumentEventMap
  | keyof HTMLElementEventMap
  | keyof WindowEventMap;

/**
 * `Handler` type.
 */

type Handler =
  | ((event: DocumentEventMap[keyof DocumentEventMap]) => void)
  | ((event: HTMLElementEventMap[keyof HTMLElementEventMap]) => void)
  | ((event: WindowEventMap[keyof WindowEventMap]) => void)
  | ((event: Event) => void);

/**
 * `Element` type.
 */

type Element = RefObject<Document | HTMLElement> | null | undefined;

/**
 * Export `useEventListener` hook.
 */

export function useEventListener(
  eventName: EventName,
  handler: Handler,
  element?: Element,
  options?: boolean | AddEventListenerOptions
): void {
  useEffect(() => {
    const targetElement = element?.current ?? window;

    if (!targetElement) return;

    targetElement.addEventListener(eventName, handler, options);

    return () => targetElement.removeEventListener(eventName, handler);
  }, [element, eventName, handler, options]);
}
