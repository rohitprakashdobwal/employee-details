import {  inject, Injectable } from '@angular/core';
import { employeeDetail } from '../model/employeeDetail.type';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeApi {

  http = inject(HttpClient);

  getEmployees() {
    const urlEmp = `https://localhost:7016/Employee`;

   return  this.http.get<Array<employeeDetail>>(urlEmp) ;
}
 
}

 