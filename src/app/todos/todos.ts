import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeApi } from '../services/employee-api';
import { employeeDetail } from '../model/employeeDetail.type';
import { catchError } from 'rxjs';
import { EmpList } from '../components/emp-list/emp-list';
import { FormsModule } from '@angular/forms';
import { EmpPipePipe } from '../pipes/emp-pipe-pipe';
// import { NgIf } from '@angular/common';
// import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-todos',
  imports: [EmpList,FormsModule,EmpPipePipe],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos implements OnInit {

  employeeService= inject(EmployeeApi);
  employees = signal<Array<employeeDetail>>([]);
serchText = signal('');

  ngOnInit():void { 
    this.employeeService.getEmployees().
    pipe(
      catchError((error) => {
        console.error('Error fetching employees:', error);
        throw error; // Re-throw the error to handle it later if needed
      })
    ).subscribe((data: Array<employeeDetail>) => {
      this.employees.set(data);
    });    
  }
    
  loading() {
     console.log('Waiting...');   
  }

  updateEmployee(employee: employeeDetail) {

    this.employees.update((currentEmployees) => {
      return currentEmployees.map(emp =>{
          if (emp.empId === employee.empId) {
            return {...emp,             
              completed:emp.gender};           
          }
          return emp;
        }
      )}
    );     
  }

}
