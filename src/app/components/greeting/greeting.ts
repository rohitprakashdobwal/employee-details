import { Component, input, signal } from '@angular/core'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-greeting',
  imports: [RouterLink],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css'
})
export class Greeting {

      message = input('Hello, welcome to the Employee Portal!');
title1 = "Employee Portal";
title = signal('Employee Portal');
}
