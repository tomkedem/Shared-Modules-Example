import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewModule1Component } from './new-module1.component';

const routes: Routes = [
  { path: '',
    component: NewModule1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewModule1RoutingModule { }
