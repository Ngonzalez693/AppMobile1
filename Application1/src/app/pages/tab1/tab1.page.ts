import { Component, OnInit } from '@angular/core'
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { RickyMortyBdService } from 'src/app/services/ricky-morty-bd.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  personajes: any[] = [];
  url_next: any;


  constructor(private bd: RickyMortyBdService) { }

  async cargarPersonajes() {
    //this.cargando = true;
    await this.bd
      .getAllPersonajes()
      .toPromise()
      .then((resp: any) => {

        this.personajes = resp.results;
        console.log('MISPERSONAJES', this.personajes);

        this.url_next = resp.info.next;
        console.log('Siguiente:', this.url_next);

      });
  }

  async cargarPersonajesSiguientes() {
    //this.cargando = true;
    await this.bd
      .getMorePersonajes(this.url_next)
      .toPromise()
      .then((resp: any) => {

        let masPersonajes = resp.results;
        this.personajes.push( ...masPersonajes);

        this.url_next = resp.info.next;
        console.log('Siguiente:', this.url_next);
      });
  }

  ngOnInit() {
    this.cargarPersonajes();
  }

  onIonInfinite(ev:any) {
    this.cargarPersonajesSiguientes();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
