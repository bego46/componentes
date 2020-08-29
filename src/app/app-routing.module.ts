import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./Paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./Paginas/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./Paginas/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'botones',
    loadChildren: () => import('./Paginas/botones/botones.module').then( m => m.BotonesPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./Paginas/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./Paginas/check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./Paginas/date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./Paginas/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./Paginas/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./Paginas/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./Paginas/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./Paginas/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'list-reorder',
    loadChildren: () => import('./Paginas/list-reorder/list-reorder.module').then( m => m.ListReorderPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./Paginas/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./Paginas/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./Paginas/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'progress-bar',
    loadChildren: () => import('./Paginas/progress-bar/progress-bar.module').then( m => m.ProgressBarPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./Paginas/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./Paginas/searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./Paginas/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./Paginas/slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./Paginas/tabs/tabs.module').then( m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
