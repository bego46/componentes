import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../botones/botones.module').then( m => m.BotonesPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../input/input.module').then( m => m.InputPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
