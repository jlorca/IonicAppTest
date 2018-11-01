import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountEditionComponent } from './account-edition/account-edition.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'sf-accounts',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'account-detail/:id', component: AccountDetailComponent 
  },
  { 
    path: 'account-edition/:id', component: AccountEditionComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
