import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './state/todo-list.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    TodoListComponent,
    StoreModule.forRoot({}),
    [StoreModule.forFeature('todoList', todosReducer)],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
