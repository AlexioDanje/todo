import { Component, Input } from '@angular/core';

import { TodoService } from '../../services/todo.service';
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons/faPencilAlt";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { MatDialog } from "@angular/material/dialog";
import { StatusEnum, Todo } from '../../model/todo.model';
import {Router} from "@angular/router";

@Component({
             selector: 'app-todo-item',
             templateUrl: './todo-item.component.html',
             styleUrls: ['./todo-item.component.less']
           })
export class TodoItemComponent {

  @Input() todo: Todo;
  message = '';
  faPencil = faPencilAlt;
  faTrash = faTrashAlt;
  isOpen: boolean = false;
  isWritable: boolean = false;
  status: StatusEnum[] = [StatusEnum.OPEN, StatusEnum.IN_PROGRESS, StatusEnum.DONE];

  constructor(
    private todoService: TodoService,
    private router: Router) {

  }

  deleteTodo() {
    return this.todoService.delete(this.todo.id)
               .subscribe(() =>
                          this.router.navigate(['/todos']),
                          error => {
                            console.error('Error occurred while deleting the todo', error);
                          });
  }

  updateTodo() {
    this.togglePanel();
    if (this.isWritable){
      this.todoService.updateTodo(this.todo)
        .subscribe(() => {
            console.info("The todo was updated successfully!")
          },
          error => console.error('Error occurred while updating the todo', error)
        );
    }else {
      this.isWritable = true;
    }
  }

  togglePanel() {
    this.isOpen = !this.isOpen
  }

}



