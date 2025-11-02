import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then(m => m.Home)
}
,
{
    path: 'greeting',
    //pathMatch: 'full',
    loadComponent: () => import('./components/greeting/greeting').then(m => m.Greeting)
}

,
{
    path: 'todos',
    //pathMatch: 'full',
    loadComponent: () => import('./todos/todos').then(m => m.Todos)
}

];
