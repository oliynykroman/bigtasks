import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'routes/:id', loadChildren: () => import('./pages/routing-test/routing-test.module').then(mod => mod.RoutingTestModule) },
  { path: 'injectable', loadChildren: () => import('./pages/injectable/injectable.module').then(mod => mod.InjectableModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
