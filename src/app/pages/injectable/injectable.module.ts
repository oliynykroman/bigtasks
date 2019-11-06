import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InjectableRoutingModule } from './injectable-routing.module';
import { InjectableComponent } from './injectable.component';
import { DataServiceService } from 'src/app/services/data-service.service';


@NgModule({
  declarations: [InjectableComponent],
  imports: [
    CommonModule,
    InjectableRoutingModule
  ],
  providers: [
    // DataServiceService
  ]
})
export class InjectableModule { }
