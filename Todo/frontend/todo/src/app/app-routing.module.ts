import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { TodosListComponent } from './todos-list/todos-list.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'home/:name',component:HomeComponent,canActivate:[RouteGuardService]},
  {path:'todos',component:TodosListComponent,canActivate:[RouteGuardService]},
  {path:'todos/:id',component:TodoComponent,canActivate:[RouteGuardService]},

  {path:'**',component:ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
