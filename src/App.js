import { useState } from 'react';


function App() {
  const [info, setInfo] = useState({
    name: 'Pham Hai Dang',
    age: 21,
    job: 'student'
  });

  const updateInfo = () => {
    setInfo({
      ...info,
      bio: 'dep trai con lai 12 dong mau'
    });
  };

  return (
    <div className="App" style={{padding: "12px"}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={updateInfo}>update info</button>
    </div>
  );
}

export default App;
