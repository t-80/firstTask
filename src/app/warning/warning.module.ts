import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningComponent } from './warning.component';
import { AlertModule } from '../_alert/alert.module';


@NgModule({
  declarations: [WarningComponent],
  imports: [
    CommonModule,
    AlertModule
  ],
  exports:[WarningComponent]
})
export class WarningModule { }
