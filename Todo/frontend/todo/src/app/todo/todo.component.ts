import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../todos-list/todos-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number =this.route.snapshot.params['id'];
  todo: Todo;
  message:string;

  constructor(private todoService:TodoDataService, 
    private route:ActivatedRoute,
    private router:Router) { }



  ngOnInit(): void {

    this.todo=new Todo(this.id,'',false,new Date());
    
    if(this.id !=-1){
    this.todoService.retriveTodo('Ganesh',this.id).subscribe(
      data=>this.todo=data
    )}
  }

  saveTodo(){
    if(this.id ==-1){//create
      this.todoService.createTodo('Ganesh', this.todo).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['todos']); 
        }  )
    }else{
    this.todoService.updateTodo('Ganesh',this.id,this.todo).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['todos']); 
      }
    )}
  }

}
