import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from '../module/dashboard/dashboard.component';
import { DevicesComponent } from '../module/devices/devices.component';
import { ConfigurationComponent } from '../module/configuration/configuration.component';

const routesHome: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'Devices', component: DevicesComponent },
      { path: 'Configuration', component: ConfigurationComponent }
    ]


  },
];

@NgModule({
  imports: [RouterModule.forChild(routesHome)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
