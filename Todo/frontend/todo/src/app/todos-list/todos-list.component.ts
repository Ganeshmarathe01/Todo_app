import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})


export class TodosListComponent implements OnInit {
  message: string="";


  constructor(private todoService:TodoDataService, private router: Router) { }

  todos: Todo[] | undefined;
  // todos=[
  //   new Todo(1,'workout',false,new Date()),
  //   new Todo(2,'learn new programming language',false,new Date()),
  //   new Todo(3,'learn to play guitar',false,new Date())
  // ];
  

  ngOnInit(): void {
    this.retriveTodos();
  }

  retriveTodos(){
    this.todoService.retriveAllTodos('Ganesh').subscribe(
      response =>{
        console.log(response);
              this.todos=response;
            }
    );
  }

  deleteTodo(id: any) {
      this.todoService.deleteTodo('Ganesh',id).subscribe(
        response=>{
          console.log(response);
          this.message=`Todo with Id=${id}, Deleted Successfully`;
          this.retriveTodos();
        } 
      );    
  }


  updateTodo(id:any){
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }


}

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
    
  ){}
}
