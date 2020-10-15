import { createSelector } from 'reselect';

const selectTodoList = state => state.todo;

export const selectTodoTasks = createSelector(
    [selectTodoList],
    (todo) => todo.task
);
