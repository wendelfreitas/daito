import { useState } from 'react';

/**
 * It says Hello Ascendio.
 * @return {string}
 */
export const useHelloWorld = () => {
  const [name] = useState('Ascendio');

  return `Hello ${name}`;
};
