import { createAction } from '@reduxjs/toolkit';

export const fetchTodosRequest = createAction('todos/fetchTodosRequest');
export const fetchTodosSuccess = createAction('todos/fetchTodosSuccess');
export const fetchTodosError = createAction('todos/fetchTodosError');

export const addTodosRequest = createAction('todos/addTodosRequest');
export const addTodosSuccess = createAction('todos/addTodosSuccess');
export const addTodosError = createAction('todos/addTodosError');

export const deleteTodosRequest = createAction('todos/deleteTodosRequest');
export const deleteTodosSuccess = createAction('todos/deleteTodosSuccess');
export const deleteTodosError = createAction('todos/deleteTodosError');

export const toggleCompletedRequest = createAction(
  'todos/toggleCompletedRequest'
);
export const toggleCompletedSuccess = createAction(
  'todos/toggleCompletedSuccess'
);
export const toggleCompletedError = createAction('todos/toggleCompletedError');

export const changeFilter = createAction('todos/changeFilter');
