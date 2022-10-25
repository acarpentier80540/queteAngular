import { Component, OnInit } from '@angular/core';
import { Order } from './sign-up';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: Order = new Order("", "","", "");
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.model);
  }
}
