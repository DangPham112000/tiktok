import { useState, useEffect } from 'react';

function Content() {
    const [time, setTime] = useState(180);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
}

export default Content;