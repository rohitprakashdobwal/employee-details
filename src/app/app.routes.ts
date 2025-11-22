import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then(m => m.Home)
}
,
{
    path: 'employees',
    //pathMatch: 'full',
    loadComponent: () => import('./employees/employees').then(m => m.Employees)
},
{
    path: 'employees-detail',
    //pathMatch: 'full',
    loadComponent: () => import('./employees-detail/employees-detail').then(m => m.EmployeesDetail)
}
,
{
    path: 'contact',
    //pathMatch: 'full',
    loadComponent: () => import('./contact/contact').then(m => m.Contact)
}];

export default routes;