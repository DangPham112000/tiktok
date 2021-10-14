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
  const [idChecked, setIdChecked] = useState(2);
  
  const submit = () => {
    // Call API
    console.log({
      idChecked
    });
  };
  
  return (
    <div className="App" style={{padding: "60px"}}>
      {
        courses.map(course => {
          return (
            <div key={course.id} >
              <input 
                type="radio"
                checked={idChecked === course.id}
                onChange={() => setIdChecked(course.id)} 
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
