
import { useRef } from 'react';
import { useStore, actions } from './store'

function App() {

  const [state, dispatch] = useStore();

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(actions.addToDo(state.jobInput));
    dispatch(actions.setToDoInput(''));
    inputRef.current.focus();
  }

  
  return (
    <div className="App" style={{ padding: "60px" }}>
      <input
        ref={inputRef}
        placeholder='your work'
        value={state.jobInput}
        onChange={(e) => {
          dispatch(actions.setToDoInput(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add job</button>
      <ul>
        {state.jobs.map((job, index) => (
          <li key={index}>
            <span>{job}</span>
            <span onClick={()=>{dispatch(actions.delToDo(index))}}>&times;</span>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default App;