import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { CalenderComponent } from './calender/calender.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routes.module';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent, DashBoardComponent, FooterComponent, CalenderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
