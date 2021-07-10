import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'covid1',
    loadChildren: () => import('./covid1/covid1.module').then( m => m.Covid1PageModule)
  },
  {
    path: 'covid2',
    loadChildren: () => import('./covid2/covid2.module').then( m => m.Covid2PageModule)
  },
  {
    path: 'covid3',
    loadChildren: () => import('./covid3/covid3.module').then( m => m.Covid3PageModule)
  },
  {
    path: 'covid4',
    loadChildren: () => import('./covid4/covid4.module').then( m => m.Covid4PageModule)
  },
  {
    path: 'covid5',
    loadChildren: () => import('./covid5/covid5.module').then( m => m.Covid5PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
