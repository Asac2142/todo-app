import { todoActionTypes } from "./todoList.types";
import { addTaskToTodoList } from './todoList.utils';

const INITIAL_STATE = {
    todoList: []
};

const todoListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case todoActionTypes.ADD_TASK:
            return {
                ...state,
                todoList: addTaskToTodoList(state.todoList, action.payload)
            }
        default:
            return state;
    }
};

export default todoListReducer;
