import { useRef } from 'react';
import Video from './Video'

function App() {
  
  const videoRef = useRef();
  
  const handlePause = () => {
    videoRef.current.pause();
  }
  const handlePlay = () => {
    videoRef.current.play();
  }
  
  
  return (
    <div className="App" style={{ padding: "60px" }}>
      <Video ref={videoRef}/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  )
}

export default App;