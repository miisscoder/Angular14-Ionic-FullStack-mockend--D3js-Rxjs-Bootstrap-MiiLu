import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        loadChildren: () => import('./pages/start/start.module').then(m => m.StartPageModule)
    },
    {
        path: 'fund',
        loadChildren: () => import('./pages/blank/blank.module').then(m => m.BlankPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => import('./pages/blank/blank.module').then(m => m.BlankPageModule)
    },
    {
        path: 'talk',
        loadChildren: () => import('./pages/blank/blank.module').then(m => m.BlankPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('./pages/blank/blank.module').then(m => m.BlankPageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
    },
    {
        path: 'budget',
        loadChildren: () => import('./pages/budget/budget.module').then(m => m.BudgetPageModule)
    },
    {
        path: 'transaction',
        loadChildren: () => import('./pages/transaction/transaction.module').then(m => m.TransactionPageModule)
    },
    {
        path: 'goal',
        loadChildren: () => import('./pages/goal/goal.module').then(m => m.GoalPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
