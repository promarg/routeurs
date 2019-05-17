import { Component, OnInit } from '@angular/core';
import { InterForm } from './model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

model: InterForm = new InterForm();



onSubmit() {
  // form submitted
  console.log(this.model);
}

FormForm
  ngOnInit() {
  }

}



