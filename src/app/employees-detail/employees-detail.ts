import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDto } from '../models/employee-dto';
import { FormsModule } from '@angular/forms';
import { EmployeesApi } from '../services/employees/employees-api';


@Component({
  selector: 'app-employees-detail',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './employees-detail.html',
  styleUrl: './employees-detail.css',
})
export class EmployeesDetail {

  employees: EmployeeDto[] = [];
  employeeAddRequest: EmployeeDto = this.getEmptyEmployee();
  showForm: boolean = false;
  isEditMode: boolean = false;

  constructor(private employeesApi: EmployeesApi) { }

  ngOnInit() {

    this.loadEmployees();
  }

  loadEmployees() {
    this.employeesApi.getEmployees().subscribe(
      (resposne) => {
        this.employees = resposne;
      }
    );
  }
  openAndAddForm() {
    this.employeeAddRequest = this.getEmptyEmployee();
    this.showForm = true;
    this.isEditMode = false;
  }

  saveEmployee() {
    if (this.isEditMode) {
      // Update existing employee logic here  
      this.employeesApi.updateEmployee(this.employeeAddRequest)
        .subscribe(() => {
          this.loadEmployees();
          this.cancelForm();
        }
        );
    } else {
      // Add new employee logic here

      this.employeesApi.addEmployee(this.employeeAddRequest)
        .subscribe({
          next: (employee) => {
            this.employees.push(employee);
            this.showForm = false;
          }
        });
    }
  }

  editEmployee(employee: EmployeeDto) {
    this.employeeAddRequest = { ...employee };
    this.showForm = true;
    this.isEditMode = true;
  }

  deleteEmployee(employeeId: string) {
    if (!employeeId) return;
    if (!confirm("Are you sure you want to delete this employee?")) {
      return;
    }
    this.employeesApi.deleteEmployee(employeeId)
      .subscribe(() => {
        this.employees = this.employees.filter(e => e.id !== employeeId);
      });
  }

  cancelForm() {
    this.showForm = false;
    this.isEditMode = false;
  }

  getEmptyEmployee(): EmployeeDto {

    return {
      id: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      salary: 0,
      createdDate: new Date(),
      updatedDate: new Date()
    };

  }
}







