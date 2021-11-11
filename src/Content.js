import { useState, useEffect } from 'react';

const lessons = [
    {
        id: 1,
        name: 'Hoc JS cung HDP'
    }, 
    {
        id: 2,
        name: 'Hoc HTML/CSS'
    },
    {
        id: 3,
        name: 'Hoc ReactJS'
    }
];

function Content() {
    const [channelSelect, setChannelSeclect] = useState(1);


    useEffect(() => {
        const handleComment = (e) => {
            console.log(e.detail);
        }
        window.addEventListener(`lesson-${channelSelect}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${channelSelect}`, handleComment);
        }
    }, [channelSelect])
    
    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li 
                        key={lesson.id} 
                        style={channelSelect === lesson.id ? {color: 'red'} : {}}
                        onClick={() => setChannelSeclect(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Content;


