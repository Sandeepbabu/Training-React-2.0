import React, {useState} from 'react'
import Login from './loginform';


function App() {
  const [seen, setSeen] = useState(false)

  function togglePop () {
      setSeen(!seen);
  };

  return (
      <div>
          <button onClick={togglePop}>Login</button>
          {seen ? <Login toggle={togglePop} /> : null}
      </div>
  )
}

export default App;
