import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username  : string ="";
  password : string ="";
  invalidLogin : boolean = false;

  constructor(private router:Router, private hardAuthService:HardcodedAuthenticationService,private basicAuthService:BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  // handleLogin():void{
  //   if(this.hardAuthService.authenticate(this.username,this.password)){
  //     this.router.navigate(['home',this.username]);

  //   }else{
  //     this.invalidLogin=true;
  //   }
  // }

  handleBasicAuthLogin():void{
    this.basicAuthService.executeAuthenticationService(this.username,this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['home',this.username]);
        this.invalidLogin=false;
      },
      error =>{
        console.log(error);
        this.invalidLogin=true;
      }
    )
  }

}
