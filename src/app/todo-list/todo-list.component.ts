import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../sdk/api/todos.service';
import { HttpClient } from '@angular/common/http';
import { Configuration } from 'src/sdk';
import { Todo } from '../../sdk/model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  API_BASE_URL = 'http://localhost:4010';

  todoService: TodosService;

  todos: Todo[] = [];

  constructor(private httpClient: HttpClient) {
    this.todoService = new TodosService(httpClient, this.API_BASE_URL, new Configuration({
      basePath: this.API_BASE_URL
    }));
    this.todoService.getAllTodos().subscribe({
      next: todos => this.todos = todos,
      complete: () => console.log('End of todos observable'),
      error: err => console.error(err)
    });
  }

  ngOnInit(): void {
  }

}
