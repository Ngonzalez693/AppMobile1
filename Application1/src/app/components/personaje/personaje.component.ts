import { NgModule } from '@angular/core';
import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss'],
})
export class PersonajeComponent  implements OnInit {

  @Input() personaje:any;

  constructor() { }

  ngOnInit() {}

}
