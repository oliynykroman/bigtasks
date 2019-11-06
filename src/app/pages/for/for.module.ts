import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForRoutingModule } from './for-routing.module';
import { ForComponent } from './for.component';


@NgModule({
  declarations: [ForComponent],
  imports: [
    CommonModule,
    ForRoutingModule
  ]
})
export class ForModule { }
