import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Covid4Page } from './covid4.page';

const routes: Routes = [
  {
    path: '',
    component: Covid4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Covid4PageRoutingModule {}
