import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is my title';
  year = new Date().getFullYear();
  sum = 4+2;
  numbers = [1,2,3,4,5];
  dog = {name: "Jamie", isHungry: true};
}
