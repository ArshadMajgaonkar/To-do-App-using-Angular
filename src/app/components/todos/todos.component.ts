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
  removeBtn;

  constructor() {
    // console.log("i am constructor of todos.component");
    
    this.todos=[
      new Todo(0,"Purchase a bat",false),
      new Todo(1,"Purchase gloves",false),
      new Todo(2,"Purchase sports shoes",false)
    ];
   }

  ngOnInit(): void {
    // console.log("i am ngOnInit");
    
  }

  add()
  {
    
    this.todos.push(new Todo(this.todos.length,this.inputTodo,false));
    this.inputTodo="";
  }

  newTodoList:Todo[]=[];

  remove(index,length)
  {
    for(let i=0; i<length; i++)
    {
      if(i!=index)
      this.newTodoList.push(this.todos[i]);
    }

    this.todos = this.newTodoList;

    this.newTodoList=[];
    // this.todos = this.todos.filter(todo => todo.id!=index);
    
    
  }
}
