import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Covid5Page } from './covid5.page';

const routes: Routes = [
  {
    path: '',
    component: Covid5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Covid5PageRoutingModule {}
