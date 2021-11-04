import { useState, useEffect } from 'react';

const btns = ['posts', 'comments', 'albums'];

function Content() {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState([]);
    const [type, setType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setContents(data);
            });
    }, [type]); 
    
    return (
        <div>
            {btns.map(btn => (
                <button
                    key={btn}
                    style={btn === type ? {
                        color: '#fff',
                        background: '#000',
                    } : {}}
                    onClick={() => setType(btn)}
                >
                    {btn}
                </button>
            ))}
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul>
                {contents.map(content => {
                    return (
                        <li key={content.id}>{content.title || content.name}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Content;