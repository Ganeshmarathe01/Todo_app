import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/todos-list/todos-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retriveAllTodos(username:string){
    return this.http.get<Todo[]>(`${API_URL}/jpa/users/${username}/todos`);
  }

  deleteTodo(username:string, id: any){
    return this.http.delete(`${API_URL}/jpa/users/${username}/todos/${id}`);
  }

  retriveTodo(username:string, id: any){
    return this.http.get<Todo>(`${API_URL}/jpa/users/${username}/todos/${id}`);
  }

  updateTodo(username:string, id:any, todo:any){
    return this.http.put(`${API_URL}/jpa/users/${username}/todos/${id}`,todo);
  }

  createTodo(username:string, todo:any){
    return this.http.post(`${API_URL}/jpa/users/${username}/todos`,todo);
  }
}
