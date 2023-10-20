import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todo:string = "";
  todolist:string[] = [];
  
  addTodo(){
    this.todolist.push(this.todo);
    this.todo = "";
  }

  removeTodo(i:number){
    this.todolist = this.todolist.filter((todo,index)=> index !=i);
}
}
