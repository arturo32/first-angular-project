import {Component, NgModule} from '@angular/core';
import {Origami} from "./origami";
import {FirstServiceService} from "./first-service.service";

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
  colors: string[] = ['green', 'red', 'yellow'];
  clickMeText: string = 'Click me?';
  origamis: Origami[];
  userInput: string = "";

  constructor(private origamiService: FirstServiceService) {
    this.origamis = origamiService.getOrigamis();
  }

  toggleClickMeText() {
    if(this.clickMeText === 'Click me?') {
      this.clickMeText = 'OMG, click me again!';
    }
    else {
      this.clickMeText = 'Click me?';
    }
  }
}


