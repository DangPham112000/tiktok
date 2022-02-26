import { SET_JOB, ADD_JOB, DEL_JOB } from './constants'

export const setJob = jobInput => {
    return {
        actionKey: SET_JOB,
        job: jobInput
    }
}

export const addJob = () => {
    return {
        actionKey: ADD_JOB
    }
}

export const delJob = (jobIndex) => {
    return {
        actionKey: DEL_JOB,
        jobIndex
    }
}