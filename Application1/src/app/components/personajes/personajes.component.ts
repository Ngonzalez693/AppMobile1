import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent  implements OnInit {

  @Input() personajes: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {}

  irAPersonaje(unIdPersonaje:number){
    console.log('IdPersonaje: ', unIdPersonaje);
    this.router.navigate(['/pagina2', unIdPersonaje]);
  }

}
