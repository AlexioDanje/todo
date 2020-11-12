import { Component, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { EventEmitter } from "events";
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/todo.model';

@Component({
             selector: 'app-update-todo',
             templateUrl: './update-todo.component.html',
             styleUrls: ['./update-todo.component.less']
           })

export class UpdateTodoComponent implements OnInit {
  @Output() submitClicked = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<UpdateTodoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private todoService: TodoService) {
  }

  public todo: Todo;

  ngOnInit() {
    console.log(this.data.id);
    console.log(this.data.title);

    this.todo = new Todo();
    this.todo.id = this.data.id;
    this.todo.title = this.data.title;
  }
}
