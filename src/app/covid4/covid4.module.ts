import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Covid4PageRoutingModule } from './covid4-routing.module';

import { Covid4Page } from './covid4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Covid4PageRoutingModule
  ],
  declarations: [Covid4Page]
})
export class Covid4PageModule {}
