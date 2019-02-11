import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';

const routesHome: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routesHome)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
