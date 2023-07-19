import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo = new Todo();
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter<Todo>();


  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("delete clicked");
  }
  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo)
  }
}
