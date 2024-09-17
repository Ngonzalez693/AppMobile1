import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { RickyMortyBdService } from 'src/app/services/ricky-morty-bd.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  lugares: any[] = [];
  url_next: any;

  constructor(private bd: RickyMortyBdService) { }

  async cargarLugares() {
    //this.cargando = true;
    await this.bd
      .getAllLugares()
      .toPromise()
      .then((resp: any) => {

        this.lugares = resp.results;
        console.log('MISLUGARES', this.lugares);

        this.url_next = resp.info.next;
        console.log('Siguiente:', this.url_next);
      });
  }

  async cargarLugaresSiguientes() {
    //this.cargando = true;
    await this.bd
      .getMoreLugares(this.url_next)
      .toPromise()
      .then((resp: any) => {

        let masPersonajes = resp.results;
        this.lugares.push( ...masPersonajes);

        this.url_next = resp.info.next;
        console.log('Siguiente:', this.url_next);
      });
  }

  ngOnInit() {
    this.cargarLugares();
  }
  
  onIonInfinite(ev:any) {
    this.cargarLugaresSiguientes();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}