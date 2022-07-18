import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[]=[];
  inputTodo:string;

  constructor() {
    console.log("i am constructor of todos.component");
    
    this.todos=[
      new Todo(1,"purchase a bat",false),
      new Todo(2,"purchase glows",false),
      new Todo(3,"purchase sports shoes",false)
    ];
   }

  ngOnInit(): void {
    console.log("i am ngOnInit");
    
  }

  add()
  {
    console.log("i am add method");
    
    this.todos.push(new Todo(this.todos.length,this.inputTodo,false));
    this.inputTodo="";
  }
}
