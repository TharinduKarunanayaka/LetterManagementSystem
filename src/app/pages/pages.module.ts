import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [DefaultHomeComponent, AboutUsComponent, SignInComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [DefaultHomeComponent, AboutUsComponent, SignInComponent]
})
export class PagesModule { }
