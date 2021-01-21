import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconBoxComponent } from './widgets/icon-box/icon-box.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, IconBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, IconBoxComponent]
})
export class SharedModule { }
