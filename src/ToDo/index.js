import { useReducer, useRef } from 'react';
import jobReducer , { initJobState } from './reducer'
import { setJob, addJob, delJob } from './actions'

// dispatch
function App() {
    const [jobState, jobDispatch] = useReducer(jobReducer, initJobState);

    const inputRef = useRef();

    const { job, jobs } = jobState;

    const handleSubmit = () => {
        jobDispatch(addJob())
        jobDispatch(setJob(''));
        inputRef.current.focus();
    }

    return (
        <div className="App" style={{ padding: "60px" }}>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder='Enter todo...'
                onChange={e => {
                    jobDispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => { jobDispatch(delJob(index)); }}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
