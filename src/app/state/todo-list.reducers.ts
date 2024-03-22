import { Item } from '../todo-list/item';
import { TodoActions, TodoListActions } from './todo-list.actions';

const initialState = [
  { description: 'eat', done: true },
  { description: 'sleep', done: false },
  { description: 'play', done: false },
  { description: 'laugh', done: false },
];

export function reducer(state = initialState, action: TodoActions) {
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
