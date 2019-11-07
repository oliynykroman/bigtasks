import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IframeRoutingModule } from './iframe-routing.module';
import { IframeComponent } from './iframe.component';
import { SafePipe } from 'src/app/pipes/safe.pipe';


@NgModule({
  declarations: [IframeComponent, SafePipe],
  imports: [
    CommonModule,
    IframeRoutingModule
  ]
})
export class IframeModule { }
