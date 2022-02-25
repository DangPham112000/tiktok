import { useReducer, useRef } from 'react';

// init state
const initJobState = {
  job: '',
  jobs: []
}

// actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DEL_JOB = 'del_job';

const setJob = jobInput => {
  return {
    actionKey: SET_JOB,
    job: jobInput
  }
}

const addJob = () => {
  return {
    actionKey: ADD_JOB
  }
}

const delJob = (jobIndex) => {
  return {
    actionKey: DEL_JOB,
    jobIndex
  }
}

// reducer
const jobReducer = (state, action) => {

  console.log('action: ', action);
  console.log('old state: ', state);

  let newState;

  switch (action.actionKey) {
    case 'set_job':
      newState = {
        ...state,
        job: action.job
      }
      break;
    case 'add_job':
      newState = {
        ...state,
        jobs: [...state.jobs, state.job]
      }
      break;
    case 'del_job':
      const newJobs = [...state.jobs]
      newJobs.splice(action.jobIndex, 1)

      newState = {
        ...state,
        jobs: newJobs
      }
      break;
    default:
      throw new Error('Invalid Action')
      break;
  }

  console.log('new state: ', newState);

  return newState;
}

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
    <div className="App" style={{padding: "60px"}}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder='Enter todo...'
        onChange={ e => {
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
