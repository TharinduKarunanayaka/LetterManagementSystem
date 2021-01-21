import { SharedModule } from './../../shared/shared.module';
import { PagesModule } from './../../pages/pages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    RouterModule,
    PagesModule,
    SharedModule
  ]
})
export class DefaultModule { }
