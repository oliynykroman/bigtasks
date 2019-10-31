import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutersComponent } from './routers/routers.component';


const routes: Routes = [
  { path: 'routers', component: RoutersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
