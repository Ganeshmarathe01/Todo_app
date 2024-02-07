import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  // authenticate(username: string,password: string){
  //   if(username==='admin' && password==='admin'){
  //     sessionStorage.setItem('authenticaterUser',username);
  //     return true;

  //   }return false;
  // }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticaterUser');
    return !(user===null);
  }

  logOut(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
