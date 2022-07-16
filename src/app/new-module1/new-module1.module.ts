import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewModule1RoutingModule } from './new-module1-routing.module';
import { NewModule1Component } from './new-module1.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NewModule1Component
  ],
  imports: [
    CommonModule,
    NewModule1RoutingModule,
    SharedModule
  ]
})
export class NewModule1Module { }
