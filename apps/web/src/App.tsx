import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button, ThemeProvider } from '@ascendio/ui';
import { useHelloWorld } from '@ascendio/hooks';

function App() {
  const name = useHelloWorld();
  const [count, setCount] = useState(0);
  return (
    <ThemeProvider>
      <div className="flex justify-between">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{name}</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p className="mt-10">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  );
}

export default App;
