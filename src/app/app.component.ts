import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoListComponent } from "./todo-list/todo-list.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, TodoListComponent],
})
export class AppComponent {}
