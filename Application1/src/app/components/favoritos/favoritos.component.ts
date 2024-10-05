import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
})
export class FavoritosComponent implements OnInit, OnDestroy {

  favoritos: any[] = [];
  favoritosSub!: Subscription;

  constructor(private router: Router,
    private storageService: StorageService) { }

  ngOnInit() {
    this.favoritosSub = this.storageService.favoritos$.subscribe(personajes => {
      this.favoritos = personajes;
    });
  }

  irAPersonaje(unIdPersonaje: number) {
    console.log('IdPersonaje: ', unIdPersonaje);
    this.router.navigate(['/pagina2', unIdPersonaje]);
  }

  ngOnDestroy() {
    this.favoritosSub.unsubscribe();
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
