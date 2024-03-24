import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { Item } from './item';
import { Store } from '@ngrx/store';
import { selectAllTodos } from '../state/todo-list.selectors';
import { AppState } from '../state/app.state';
import { TodoState } from '../state/todo-list.reducers';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [CommonModule, ItemComponent],
})
export class TodoListComponent implements OnInit {
  allItems$ = this.store.select(selectAllTodos);

  allItems: TodoState = [];

  componentTitle = 'My To Do List';

  filter: 'all' | 'active' | 'done' = 'all';

  constructor(private store: Store<AppState>) {}

  // allItems: TodoState = [
  //   { description: "eat", done: true },
  //   { description: "sleep", done: false },
  //   { description: "play", done: false },
  //   { description: "laugh", done: false },
  // ];

  ngOnInit() {
    this.allItems$.subscribe((items) => {
      console.log('------items', items);
      this.allItems = items;
    });
    // this.allItems$.subscribe((items) => this.allItems = items);
  }

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description,
      done: false,
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
