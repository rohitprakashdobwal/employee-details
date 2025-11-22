import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDto } from '../../models/employee-dto';

@Injectable({
  providedIn: 'root',
})
export class EmployeesApi {

  private employeesApiUrl = "https://localhost:7011/api/Employees";

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<EmployeeDto[]> {
    return this.httpClient.get<EmployeeDto[]>(this.employeesApiUrl);
  }

  addEmployee(employeeData: EmployeeDto): Observable<any> {
    return this.httpClient.post(this.employeesApiUrl, employeeData);
  }

  updateEmployee(employeeData: EmployeeDto): Observable<any> {
    const url = `${this.employeesApiUrl}/${employeeData.id}`;
    return this.httpClient.put(url, employeeData);
  }
  deleteEmployee(employeeId: string): Observable<any> {
    const url = `${this.employeesApiUrl}/${employeeId}`;
    return this.httpClient.delete(url);
  }
}
