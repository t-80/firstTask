import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SuccessModule } from './success/success.module';
import { WarningModule } from './warning/warning.module';
import { AlertModule } from './_alert/alert.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AlertModule,
    RouterModule,
    SuccessModule,
    WarningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
