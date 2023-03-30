/**
 * Module dependencies.
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks/dom';
import { useEventListener } from './';

/**
 * Mocked constants.
 */

const eventName = 'click';
const handler = vi.fn();
const ref = { current: document.createElement('div') };

/**
 * Test `useEventListener` hook.
 */

describe(`'useEventListener' hook`, () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should bind/unbind the event listener to the window when element is not provided', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useEventListener(eventName, handler));

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      eventName,
      expect.any(Function),
      undefined
    );

    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      eventName,
      expect.any(Function)
    );
  });

  it('should bind/unbind the event listener to the element when element is provided', () => {
    const mockedAddEventListenerSpy = vi.spyOn(ref.current, 'addEventListener');

    const mockedRemoveEventListenerSpy = vi.spyOn(
      ref.current,
      'removeEventListener'
    );

    const { unmount } = renderHook(() =>
      useEventListener(eventName, handler, ref)
    );

    expect(mockedAddEventListenerSpy).toHaveBeenCalledTimes(1);
    expect(mockedAddEventListenerSpy).toHaveBeenCalledWith(
      eventName,
      expect.any(Function),
      undefined
    );

    unmount();

    expect(mockedRemoveEventListenerSpy).toHaveBeenCalledWith(
      eventName,
      expect.any(Function)
    );
  });

  it('should bind/unbind the event listener to the document when document is provided', () => {
    const docRef = { current: window.document };
    const addEventListenerSpy = vi.spyOn(docRef.current, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(
      docRef.current,
      'removeEventListener'
    );

    const { unmount } = renderHook(() =>
      useEventListener(eventName, handler, docRef)
    );

    expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      eventName,
      expect.any(Function),
      undefined
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      eventName,
      expect.any(Function)
    );
  });

  it('should pass the options to the event listener', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    const options = {
      capture: true,
      once: true,
      passive: true
    };

    renderHook(() => useEventListener(eventName, handler, undefined, options));

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      eventName,
      expect.any(Function),
      options
    );
  });

  it('should call the event listener handler when the event is triggered', () => {
    renderHook(() => useEventListener('click', handler, ref));

    fireEvent.click(ref.current);

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
