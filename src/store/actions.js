import { ADD_TODO, DEL_TODO, SET_TODO_INPUT } from "./constants"

export const setToDoInput = (value) => {
    return {
        type: SET_TODO_INPUT,
        value
    }
}

export const addToDo = (value) => {
    return {
        type: ADD_TODO,
        value
    }
}

export const delToDo = (value) => {
    return {
        type: DEL_TODO,
        value
    }
}