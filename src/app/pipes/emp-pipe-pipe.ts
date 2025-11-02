import { Pipe, PipeTransform } from '@angular/core';
import { employeeDetail } from '../model/employeeDetail.type';

@Pipe({
  name: 'empPipe'
})
export class EmpPipePipe implements PipeTransform {

  transform(emps: employeeDetail[], serchText:string): employeeDetail[]  {

if  (!serchText) {  

  return emps;
}
const searchLower = serchText.toLowerCase();
  return emps.filter((emp) => {
     return emp.email.toLocaleLowerCase().includes(searchLower)        
  });
   // return emp;
  }

}
