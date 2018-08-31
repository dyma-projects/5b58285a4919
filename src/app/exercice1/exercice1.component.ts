import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public saisie: string;
  public attribut: string = 'center';

  constructor() { }

  ngOnInit() {
  }
  
  survole() {
	  console.log('Flight over the div');
  }

}
