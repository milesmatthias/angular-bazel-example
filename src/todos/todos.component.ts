import { Component, OnInit } from '@angular/core';

import { Todo } from './todo';
import { TodosService } from './todos.service';

import {ADD_TODO, DELETE_TODO, TOGGLE_DONE, UPDATE_TODO} from '../reducers/reducers';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
	providers: [ TodosService ],
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  editTodo: Todo;
  editing = false;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
		this.getTodos()
  }

	getTodos(): void {
		this.todosService.getTodos()
			.subscribe(todos => this.todos = todos);
	}

  addTodo(title: string): void {
		this.editTodo = undefined;
    title = title.trim();
    if (!title) { return; }

    const newTodo: Todo = { title } as Todo;
    this.todosService.addTodo(newTodo)
      .subscribe(todo => this.todos.push(todo));

		// this.store.dispatch({type: ADD_TODO, payload: {value, done: false}});
		// this.todo = '';
  }

  deleteTodo(index) {
		// this.store.dispatch({type: DELETE_TODO, payload: {index}});
  }

  cancelEdit() {
		// this.editing = false;
		// this.todo = '';
		// this.indexToEdit = null;
  }

  updateTodo(updatedTodo) {
		// this.editing = true;
		// this.todo = todo.value;
		// this.indexToEdit = index;

		// this.store.dispatch(
		// {type: UPDATE_TODO, payload: {index: this.indexToEdit, newValue: updatedTodo}});
		// this.todo = '';
		// this.indexToEdit = null;
		// this.editing = false;
  }

  toggleDone(todo, index) {
  // this.store.dispatch({type: TOGGLE_DONE, payload: {index, done: todo.done}});
  }
}
