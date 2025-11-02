import { Component, input, output } from '@angular/core';
import { employeeDetail } from '../../model/employeeDetail.type';
import { EmployeeDirective } from '../../directives/employee-directive';
@Component({
  selector: 'app-emp-list',
  imports: [EmployeeDirective],
  templateUrl: './emp-list.html',
  styleUrl: './emp-list.css'
})
export class EmpList {

  emp=input.required<employeeDetail>();

  empTogle = output<employeeDetail>();

  empClicked() {
    this.empTogle.emit(this.emp());
    console.log('Employee clicked:', this.emp());
  }
}
