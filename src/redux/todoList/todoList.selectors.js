import { createSelector } from 'reselect';

const selectTodoList = state => state.todoList;

export const selectTodoTasks = createSelector(
    [selectTodoList],
    (todo) => todo
);
