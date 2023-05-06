import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LightBulbComponent } from "./light-bulb/light-bulb.component";

import { AppComponent } from './app.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxGraphModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, LightBulbComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
