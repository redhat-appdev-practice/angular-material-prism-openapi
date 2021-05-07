import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewTodo } from 'src/sdk';
import { Todo } from '../../sdk/model/todo';
import { TodosService } from '../../sdk/api/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  model: NewTodo = {};

  constructor(
    private router: Router,
    private todoSvc: TodosService
    ) { }

  ngOnInit(): void {
  }

  addNewTodo() {
    this.todoSvc.addNewTodo(this.model)
      .toPromise()
      .then(res => {
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
