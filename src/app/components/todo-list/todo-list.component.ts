import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Todo} from "../../model/todo.model";
import {DataService} from "../../services/data.service";

@Component({
             selector: 'app-todo-list',
             templateUrl: './todo-list.component.html',
             styleUrls: ['./todo-list.component.less']
           })
export class TodoListComponent {
  todos:Todo[]=[];
  title = '';

  constructor(private todoService: TodoService, private router: Router,private dataService: DataService) {
    this.retrieveTodos();
  }

  ngOnInit(): void {
    //
    // this.dataService.sharedParam.subscribe(param=> {
    //   this.todos.unshift(param);
    // });

  }

  retrieveTodos(): void {
    this.todoService.getAll()
        .subscribe(
          data => {
            this.todos = data.reverse()
            console.log(this.todos);
          },
          error => console.error(error));

  }

  trackByMethod(index, todo){
    return todo.id;
  }

}


