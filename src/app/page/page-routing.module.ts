import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageComponent} from './page/page.component';

const routes: Routes = [
  {
    path: ' ',
    component: PageComponent
  },
  {
    path: '**',
    component: PageComponent
  },
  {
    path: 'home',
    loadChildren: () => import('..//todo/todo.module').then(m => m.TodoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
