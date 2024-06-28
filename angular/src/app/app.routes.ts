import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'courts',
        loadChildren: () => import('./court/court.module').then(m => m.CourtModule),
        title: 'Courts'
    },
    {
        path: '',
        redirectTo: 'courts',
        pathMatch: 'full'
    }
];
