import { Item } from '../todo-list/item';
import { TodoActions, TodoListActions } from './todo-list.actions';


export interface TodoItem {
  description: string,
  done: boolean
}

export type TodoState = TodoItem[]

const initialState: TodoState = [
  { description: 'eat', done: true },
  { description: 'sleep', done: false },
  { description: 'play', done: false },
  { description: 'laugh', done: false },
];

export function todosReducer(state = initialState, action: TodoActions) {
  switch (action.type) {
    case TodoListActions.Add:
      return [{ description: action.payload, done: false }, ...state];
    case TodoListActions.Remove:
      const item: Item = action.payload;
      const indexToRemove = state.indexOf(item);
      return state.flatMap((value, index) =>
        index === indexToRemove ? [] : [value]
      );
  }
}
