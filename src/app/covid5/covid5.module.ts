import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Covid5PageRoutingModule } from './covid5-routing.module';

import { Covid5Page } from './covid5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Covid5PageRoutingModule
  ],
  declarations: [Covid5Page]
})
export class Covid5PageModule {}
