import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { DevicesComponent } from './module/devices/devices.component';
import { ConfigurationComponent } from './module/configuration/configuration.component';

const routesHome: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', component: DashboardComponent},
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'Devices', component: DevicesComponent },
      { path: 'Configuration', component: ConfigurationComponent},
    ]


  },

];


@NgModule({
  imports: [RouterModule.forRoot(routesHome)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
