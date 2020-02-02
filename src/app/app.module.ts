import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SuccessModule } from './success/success.module';
import { WarningModule } from './warning/warning.module';
import { AlertModule } from './_alert/alert.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialModule } from './_shared/all-angular-material.module';
import { MustMatchDirective } from './_shared/must-match.directive'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MustMatchDirective
    ],
  imports: [
    AllMaterialModule,
    BrowserModule,
    AlertModule,
    SuccessModule,
    WarningModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
