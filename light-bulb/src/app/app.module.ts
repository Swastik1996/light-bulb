import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { LightBulbComponent } from "./light-bulb/light-bulb.component";
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxGraphModule, BrowserAnimationsModule, MatToolbarModule ],
  declarations: [ AppComponent, LightBulbComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
