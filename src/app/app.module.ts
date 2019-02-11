import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { DevicesModule } from './module/devices/devices.module';
import { ConfigurationComponent } from './module/configuration/configuration.component';
import { ConfigurationModule } from './module/configuration/configuration.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    DashboardModule,
    DevicesModule,
    HomeRoutingModule,
    ConfigurationModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
