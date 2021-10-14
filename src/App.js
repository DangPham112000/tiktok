import { useState } from 'react';

// Response from API
const courses = [
  {
    id: 1,
    name: 'HTML/CSS'
  },
  {
    id: 2,
    name: 'JavaScript'
  },
  {
    id: 3,
    name: 'Python'
  },
  {
    id: 4,
    name: 'ReactJS'
  }
];

function App() {
  const [idsChecked, setIdsChecked] = useState([]);
  
  const handleChecked = (id) => {
    setIdsChecked(prevIds => {
      if (idsChecked.includes(id)) {
        return idsChecked.filter(idChecked => idChecked !== id);
      } else {
        return [...idsChecked, id];
      }
    });
  };

  console.log(idsChecked);
  
  const submit = () => {
    // Call API
    console.log({
      ids: idsChecked
    });
  };
  
  return (
    <div className="App" style={{padding: "60px"}}>
      {
        courses.map(course => {
          return (
            <div key={course.id} >
              <input 
                type="checkbox"
                checked={idsChecked.includes(course.id)}
                onChange={() => { handleChecked(course.id); }} 
              />
              {course.name}
            </div>
          );
        })
      }
      <button onClick={submit}>submit</button>
    </div>
  );
}

export default App;
