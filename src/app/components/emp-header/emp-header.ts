import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-emp-header',
  imports: [RouterLink],
  templateUrl: './emp-header.html',
  styleUrl: './emp-header.css'
})
export class EmpHeader {

title1 = "Employee Portal";
title = signal('Employee Portal');

}
