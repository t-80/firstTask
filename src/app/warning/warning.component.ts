import { Component, OnInit } from '@angular/core';

import { AlertService} from 'src/app/_alert/alert.service'

@Component({
  selector: 'app-warning',
  template:'<button class="btn btn-warning" (click)="warn(\'Warning: ...\')">Warn</button><alert></alert>',
  styles: ["#warning { color: red; "]
})
export class WarningComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  warn(message: string) {
      console.log("warn");
      this.alertService.warn(message);
  }

  ngOnInit() {
  }

}
