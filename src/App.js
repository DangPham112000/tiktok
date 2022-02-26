
import { useContext } from 'react';
import './App.css';
import Content from './Content';
import { ThemeProvider, ThemeContext } from './ThemeContext';



function App() {

  const context = useContext(ThemeContext);
  
  console.log(context, 'alo')
  return (
    <div className="App" style={{ padding: "60px" }}>
      <button onClick={context.toggleTheme}>Toggle Theme</button>
      <Content />
    </div>

  )
}

export default App;