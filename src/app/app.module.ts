import { RocketsModule } from './rockets/rockets.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { rocketsReducer, initialState as rocketsInitialState } from './state/rockets.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(
      { Rockets: rocketsReducer },
      { initialState: { Rockets: rocketsInitialState}}
    ),
    RocketsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
