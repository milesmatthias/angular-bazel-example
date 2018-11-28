
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {HttpErrorHandler} from './todos/http-error-handler.service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {todoReducer} from './reducers/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule, BrowserModule, BrowserAnimationsModule, MaterialModule,
    HttpClientModule, HttpErrorHandler, StoreModule.forRoot({todoReducer})
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
