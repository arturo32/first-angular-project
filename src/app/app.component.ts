import { Component } from '@angular/core';

interface myFirstType {
  name: string,
  age: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'first-angular-project';
  firstVar: myFirstType = {
    name: "Arturo",
    age: 24
  }
  colors: string[] = ['green', 'red', 'yellow']
}
