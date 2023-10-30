import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadComponent } from './top-head/top-head.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import {RouterOutlet} from "@angular/router";
import { DatePipe } from '@angular/common';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import { MapsSocialComponent } from './maps-social/maps-social.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadComponent,
    BodyComponent,
    FooterComponent,
    WhatsappButtonComponent,
    MapsSocialComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
