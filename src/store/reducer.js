
import { ADD_TODO, DEL_TODO, SET_TODO_INPUT } from "./constants";

const initState = {
    jobs: [],
    jobInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                jobInput: action.value
            }
        case ADD_TODO:
            return {
                ...state,
                jobs: [...state.jobs, action.value]
            }
        case DEL_TODO:
            const newJobs = [...state.jobs];
            newJobs.splice(action.value, 1);
            
            return {
                ...state,
                jobs: newJobs
            }
    
        default:
            throw new Error('Invalid action')
    }
}

export { initState };
export default reducer;