import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './service/data/welcome-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private route: ActivatedRoute,
    private service:WelcomeDataService
  ) {

  }
  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    //console.log("Get welcome message");
  }
}
