import { useState, useRef } from 'react';

function Content() {
    const [number, setNumber] = useState(80);

    const timerId = useRef();

    const handleRun = () => {
        timerId.current = setInterval(() => {
            setNumber(prevNumber => prevNumber - 1);
        }, 100);
        console.log('Run: ', timerId);
    }
    
    const handleStop = () => {
        clearInterval(timerId.current);
        console.log('Stop: ', timerId);
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={handleRun}>Lets go</button>
            <button onClick={handleStop}>Stop it</button>
        </div>
    );
}

export default Content;


