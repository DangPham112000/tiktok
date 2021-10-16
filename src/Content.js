import { useState, useEffect } from 'react';


function Content() {
    const [title, setTitle] = useState('');

    useEffect(() => {
        console.log('use effect');
        document.title = title;
    }); 
    
    return (
        <div>
            <input
                onChange={(e) => setTitle(e.target.value)}
            />
            {console.log('Add element to DOM')}
        </div>
    );
}

export default Content;