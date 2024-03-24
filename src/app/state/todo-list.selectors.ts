import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { TodoState } from './todo-list.reducers';

export const selectTodos = (state: AppState): TodoState => state.todoList;
export const selectAllTodos = createSelector(
  selectTodos,
  (state: TodoState) => state
);
