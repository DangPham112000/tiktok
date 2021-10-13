import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  
  const increaseCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  }
  
  return (
    <div className="App" style={{padding: "12px"}}>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>plus + 3</button>
    </div>
  );
}

export default App;
