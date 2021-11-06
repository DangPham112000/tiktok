import { useState, useEffect } from 'react';

function Content() {
    const [time, setTime] = useState(180);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTime(time - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [time]);

    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
}

export default Content;