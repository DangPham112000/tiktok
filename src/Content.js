import { useState, useRef, useEffect } from 'react';

function Content() {
    const [number, setNumber] = useState(80);

    const timerId = useRef();
    const prevNumberLook = useRef();
    const h1Ref = useRef();

    useEffect(() => {
        prevNumberLook.current = number;
    }, [number]);

    useEffect(() => {
        // Lấy element
        console.log(h1Ref.current);
        // lấy toạ độ
        const rect = h1Ref.current.getBoundingClientRect();
        console.log(rect);
    })
    
    const handleRun = () => {
        timerId.current = setInterval(() => {
            setNumber(prevNumber => prevNumber - 1);
        }, 1000);
        console.log('Run: ', timerId);
    }
    
    const handleStop = () => {
        clearInterval(timerId.current);
        console.log('Stop: ', timerId);
    }

    console.log("current: ", number, "prev", prevNumberLook.current);

    return (
        <div>
            <h2 ref={h1Ref}>{number}</h2>
            <button onClick={handleRun}>Lets go</button>
            <button onClick={handleStop}>Stop it</button>
        </div>
    );
}

export default Content;


