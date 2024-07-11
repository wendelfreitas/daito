import ResizeObserver from 'resize-observer-polyfill';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

global.ResizeObserver = ResizeObserver;

(global as any).DOMRect = {
  fromRect: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
  }),
};
