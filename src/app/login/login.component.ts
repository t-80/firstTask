import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Object = {};

  options: string[] = ['Stable', 'Critical', 'Finished'];
  selectedOption: string = 'Stable';

  favoriteSex: string = 'Male';
  sex: string[] = ['Male', 'Female'];

  constructor() { 
   
  }

  ngOnInit() {
  }

  login(value) {
    alert(JSON.stringify(value))    
  }
}