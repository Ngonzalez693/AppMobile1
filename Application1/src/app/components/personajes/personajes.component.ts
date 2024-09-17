import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent  implements OnInit {

  @Input() personajes: any[] = [];

  constructor(private router: Router,
              private storageService: StorageService) { }

  ngOnInit() {}

  irAPersonaje(unIdPersonaje:number){
    console.log('IdPersonaje: ', unIdPersonaje);
    this.router.navigate(['/pagina2', unIdPersonaje]);
  }

  addFavorite(unPersonaje:any){
    console.log('ADDFavorite: ', unPersonaje);
    this.storageService.saveRemovePersonaje(unPersonaje);
  }

  esFavorito(unPersonaje:any): boolean{
    if(this.storageService.personajeInFavorites(unPersonaje)){
      return true;
    } else {
      return false;
    }
  }
}
