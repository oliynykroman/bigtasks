import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextPageRoutingModule } from './text-page-routing.module';
import { TextPageComponent } from './text-page.component';
import { TruncatePipe } from 'src/app/pipes/truncate-pipe.pipe';


@NgModule({
  declarations: [TextPageComponent, TruncatePipe],
  imports: [
    CommonModule,
    TextPageRoutingModule
  ]
})
export class TextPageModule { }
