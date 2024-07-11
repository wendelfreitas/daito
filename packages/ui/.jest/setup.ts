import ResizeObserver from 'resize-observer-polyfill';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

global.ResizeObserver = ResizeObserver;
