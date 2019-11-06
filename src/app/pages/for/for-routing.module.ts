import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForComponent } from './for.component';


const routes: Routes = [
  { path: '', component: ForComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForRoutingModule { }
