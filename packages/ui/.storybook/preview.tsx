import React from 'react';
import { ThemeProvider } from '../src/providers/ThemeProvider/ThemeProvider';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
