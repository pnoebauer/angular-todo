import { Action } from '@ngrx/store';
import { Item } from '../todo-list/item';

export enum TodoListActions {
  Add = '[TodoList] Add Todo',
  Remove = '[TodoList] Remove Todo'
}

export class AddItem implements Action {
  readonly type = TodoListActions.Add

  constructor(public payload: string) {}
}

export class RemoveItem implements Action {
  readonly type = TodoListActions.Remove
  
  constructor(public payload: Item) {}
}

export type TodoActions = AddItem | RemoveItem;