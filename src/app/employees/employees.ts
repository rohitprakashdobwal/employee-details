import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDto } from '../models/employee-dto';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EmployeesApi } from '../services/employees/employees-api';
import e from 'express';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {

  employees: EmployeeDto[] = [];

  constructor(private employeeApi: EmployeesApi) { }

  ngOnInit() {
    // Ideally, fetch employees from a service
    this.employeeApi.getEmployees().subscribe(
      (response) => {
        this.employees = response;
      }
    );

  }

}
