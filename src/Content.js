import { useState, useEffect } from 'react';

function Content() {
    const [avatar, setAvatar] = useState();
    
    useEffect(() => {
        return () => avatar && URL.revokeObjectURL(avatar.url);
    }, [avatar]);

    const handleFile = (e) => {
        const img = e.target.files[0];
        img.url = URL.createObjectURL(img)
        setAvatar(img);
    }
    
    return (
        <div>
            <input
                type="file"
                onChange={handleFile}
            />
            {avatar && (
                <img 
                    src={avatar.url} 
                    style={{
                        width: 500,
                        display: 'block',
                    }}
                />
            )}
        </div>
    );
}

export default Content;