import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpHeader } from './components/emp-header/emp-header';
//import { Greeting } from './components/greeting/greeting'; IF U ADD DIRECTLY IN IMPORTS THIS  WILL IN UI DIRECTLY RENDER THE COMPONENT MAY CAUSE DUPLICATE RENDERING
//import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmpHeader],
  // imports: [RouterOutlet,/*Home,*/EmpHeader],
  template: `
     <app-emp-header></app-emp-header>
     <main>
         <!-- <app-home></app-home> -->
          <router-outlet></router-outlet>
          <!-- <app-greeting></app-greeting> -->
     </main>   
  `,
  styles: [
    `
      main {
        padding: 20px;
       //background-color: #f4f4f4;
      }
      h1 {
        font-size: 24px;
        color: #7cc918ff;
      }
      p {
        font-size: 16px;
        color: #0a1b52ff;
      }
    `
   ],
})
export class App {
  protected readonly title = signal('Employee Test detail');
}
