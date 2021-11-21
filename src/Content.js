import { useState, useEffect, useLayoutEffect } from 'react';

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback 

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useEffect callback (sync)
// 5. Render lại UI

function Content() {
    const [number, setNumber] = useState(0);

    // render 0 1 2 3 4 0 1 2....
    // useEffect(() => {
    //     if (number > 3) 
    //         setNumber(0);
    // }, [number]);

    // render 0 1 2 3 0 1 2....
    useLayoutEffect(() => {
        if (number > 3) 
            setNumber(0);
    }, [number]);

    const handleCount = () => {
        setNumber(number + 1);
    }
    
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={handleCount}>Lets+1</button>
        </div>
    );
}

export default Content;


