import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentComponent } from './components/shared-component/shared-component.component';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    SharedComponentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    SharedComponentComponent
  ]
})
export class SharedModule { }
