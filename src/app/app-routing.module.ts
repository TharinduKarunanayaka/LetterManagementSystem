import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DefaultHomeComponent } from './pages/default-home/default-home.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      { path: 'home', component: DefaultHomeComponent }
    ]
  },
  {
    path: 'sign-in', component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
