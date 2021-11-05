import { cleanup } from '@testing-library/react';
import { useState, useEffect } from 'react';

const btns = ['posts', 'comments', 'albums'];

function Content() {
    const [contents, setContents] = useState([]);
    const [type, setType] = useState('posts');
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setContents(data);
            });
    }, [type]); 

    
    useEffect(() => {
        const handleShowGoToTop = () => {
            if (window.scrollY > 500) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }
        } 

        window.addEventListener('scroll', handleShowGoToTop); 

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleShowGoToTop);
        }
    }, []);
    

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
            <ul>
                {contents.map(content => {
                    return (
                        <li key={content.id}>{content.title || content.name}</li>
                    );
                })}
            </ul>
            { isShow && (
                <button
                    style={{
                        position: 'fixed',
                        right: 10,
                        bottom: 10,
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    );
}

export default Content;