import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { BrowserModule } from '@angular/platform-browser';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  RouterOutlet, Header   ], //BrowserModule,Home
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee-details');
}
