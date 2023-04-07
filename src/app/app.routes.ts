import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'to-do-list',
    loadComponent: () => import('./pages/to-do-list/to-do-list.page').then( m => m.ToDoListPage)
  },
  {
    path: '',
    redirectTo: 'to-do-list',
    pathMatch: 'full',
  }
];
