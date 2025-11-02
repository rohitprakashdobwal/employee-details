import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from "../components/counter/counter";

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  homeMessage = signal('Home works! message to greeting component');

  keyUpHandler(event:  KeyboardEvent) {
    console.log(`Key up event triggered ${event.key} key` );
  }
}
