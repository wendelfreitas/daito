import { useState } from 'react';

/**
 * It says Hello Daito.
 * @return {string}
 */
export const useHelloWorld = () => {
  const [name] = useState('Daito');

  return `Hello ${name}`;
};
