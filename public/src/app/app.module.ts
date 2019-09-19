import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service'; //Register Service
import { HttpClientModule } from '@angular/common/http'; //Import Client Module

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Import Client Module
  ],
  providers: [HttpService], //Register Service
  bootstrap: [AppComponent]
})
export class AppModule { }
