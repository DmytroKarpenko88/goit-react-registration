import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addTodosError,
  addTodosRequest,
  addTodosSuccess,
  changeFilter,
  deleteTodosError,
  deleteTodosRequest,
  deleteTodosSuccess,
  fetchTodosError,
  fetchTodosRequest,
  fetchTodosSuccess,
  toggleCompletedError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
} from './todos-actions';

const items = createReducer([], {
  [fetchTodosSuccess]: (_, { payload }) => payload,
  [addTodosSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodosSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompletedSuccess]: (state, { payload }) =>
    state.map(todo => (todo.id === payload.id ? payload : todo)),
});

const loading = createReducer(false, {
  [fetchTodosRequest]: () => true,
  [fetchTodosSuccess]: () => false,
  [fetchTodosError]: () => false,
  [addTodosRequest]: () => true,
  [addTodosSuccess]: () => false,
  [addTodosError]: () => false,
  [deleteTodosRequest]: () => true,
  [deleteTodosSuccess]: () => false,
  [deleteTodosError]: () => false,
  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
