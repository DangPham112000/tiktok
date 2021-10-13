import { useState } from 'react';

const orders = [300, 500, 700];

function App() {
  // const total = orders.reduce((total, order) => {
  //   return total + order;
  // });
  // console.log(total);
  
  const [counter, setCounter] = useState(() => {
    
    const total = orders.reduce((totalOrders, order) => totalOrders + order);
    
    console.log(total);
    return total;
  });
  
  const increaseCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  }
  
  return (
    <div className="App" style={{padding: "12px"}}>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>plus</button>
    </div>
  );
}

export default App;
