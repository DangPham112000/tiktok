import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const submit = () => {
    // Call API
    console.log({
      name, 
      email
    });
  };
  
  return (
    <div className="App" style={{padding: "60px"}}>
      <input value={name} onChange={(e) => { setName(e.target.value) }}/>
      <br />
      <input value={email} onChange={(e) => { setEmail(e.target.value) }}/>
      <button onClick={submit}>submit</button>
    </div>
  );
}

export default App;
