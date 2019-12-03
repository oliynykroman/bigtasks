import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextPageComponent } from './text-page.component';


const routes: Routes = [{
  path: '',
  component: TextPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextPageRoutingModule { }
