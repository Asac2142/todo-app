import { todoActionTypes } from './todoList.types';

export const addTask = (task) => {
    return {
        type: todoActionTypes.ADD_TASK,
        payload: task
    }
};

export const editTask = (task) => {
    return {
        type: todoActionTypes.EDIT_TASK,
        payload: task
    }
};

export const removeTask = (task) => {
    return {
        type: todoActionTypes.REMOVE_TASK,
        payload: task
    }
};
