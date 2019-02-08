import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsViewComponent } from '../app/accounts-view/accounts-view.component';

const routes: Routes = [
  { path: 'account-view', component: AccountsViewComponent },
  { path: '', redirectTo: '/account-view', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
