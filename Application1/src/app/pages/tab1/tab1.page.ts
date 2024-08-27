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

  constructor(private bd: RickyMortyBdService) { }

  async cargarPersonajes() {
    //this.cargando = true;
    await this.bd
      .getAllPersonajes()
      .toPromise()
      .then((resp: any) => {

        this.personajes = resp.results;
        console.log('MISPERSONAJES', this.personajes);

      });
  }

  ngOnInit() {
    this.cargarPersonajes();
  }

  onIonInfinite(ev: Event) {
    this.cargarPersonajes();
    setTimeout(() => {
      const infiniteScroll = ev.target as HTMLIonInfiniteScrollElement;
      infiniteScroll.complete();
    }, 500);
  }

}
