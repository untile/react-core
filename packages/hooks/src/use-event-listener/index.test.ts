/**
 * Module dependencies.
 */

import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks/dom';
import { useEventListener } from './';

/**
 * Mocked constants.
 */

const eventName = 'click';
const handler = jest.fn();
const ref = { current: document.createElement('div') };

/**
 * Test `useEventListener` hook.
 */

describe(`'useEventListener' hook`, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should bind/unbind the event listener to the window when element is not provided', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

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
    const mockedAddEventListenerSpy = jest.spyOn(
      ref.current,
      'addEventListener'
    );

    const mockedRemoveEventListenerSpy = jest.spyOn(
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
    const addEventListenerSpy = jest.spyOn(docRef.current, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(
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
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
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

  it('should have the correct event type', () => {
    const clickHandler = jest.fn();
    const keydownHandler = jest.fn();

    renderHook(() => useEventListener('click', clickHandler, ref));
    renderHook(() => useEventListener('keydown', keydownHandler, ref));

    fireEvent.click(ref.current);
    fireEvent.keyDown(ref.current);

    expect(clickHandler).toHaveBeenCalledWith(expect.any(MouseEvent));
    expect(keydownHandler).toHaveBeenCalledWith(expect.any(KeyboardEvent));
  });
});
