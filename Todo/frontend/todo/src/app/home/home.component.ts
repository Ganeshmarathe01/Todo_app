import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name="";

  constructor(private route:ActivatedRoute,
    private welcomeDataService:WelcomeDataService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['name']);

    this.name=this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanService().subscribe();
  }

}
