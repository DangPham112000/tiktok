
// init state
export const initJobState = {
    job: '',
    jobs: []
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
            };
            break;
        case 'add_job':
            newState = {
                ...state,
                jobs: [...state.jobs, state.job]
            };
            break;
        case 'del_job':
            const newJobs = [...state.jobs];
            newJobs.splice(action.jobIndex, 1);

            newState = {
                ...state,
                jobs: newJobs
            };
            break;
        default:
            throw new Error('Invalid Action');
    }

    console.log('new state: ', newState);

    return newState;
}

export default jobReducer;