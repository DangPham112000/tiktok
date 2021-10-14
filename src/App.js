import { useState } from 'react';

const gifts = [
  'CPU i9',
  'RAM 32GB',
  'SSD 1TB',
  'GPU Nvidia 1060ti'
];

function App() {
  const [gift, setGift] = useState();

  const randomGift = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    // console.log(randomIndex);

    setGift(gifts[randomIndex]);
  };

  return (
    <div className="App" style={{padding: "60px"}}>
      <h1>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={randomGift}>GACHA</button>
    </div>
  );
}

export default App;
