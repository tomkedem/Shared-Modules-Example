import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewModule1Component } from './new-module1/new-module1.component';

const routes: Routes = [
  { path: 'new-module',
    loadChildren: () => import('./new-module1/new-module1.module').then(m => m.NewModule1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
