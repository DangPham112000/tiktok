import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const getName = (e) => {
    setName(e.target.value);
  };
  
  const resetName = (e) => {
    setName('Pham Hai Dang')
  };

  console.log(name);
  
  return (
    <div className="App" style={{padding: "60px"}}>
      <input value={name} onChange={getName}/>
      <button onClick={resetName}>Reset</button>
    </div>
  );
}

export default App;
