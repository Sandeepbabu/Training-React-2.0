import React from 'react';
import {CounterProvider} from './ContextProvider';
import Counter from './Counter';
import Counter2 from './Counter2';
function App() {
  return (
    <CounterProvider>
    <div className='App'>
      <Counter />
      <Counter2 />
    </div>
    </CounterProvider>
  );
}
export default App;