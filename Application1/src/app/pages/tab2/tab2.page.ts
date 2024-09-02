import { Component, OnInit } from '@angular/core';
import { RickyMortyBdService } from 'src/app/services/ricky-morty-bd.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  lugares: any[] = [];

  constructor(private bd: RickyMortyBdService) { }

  async cargarLugares() {
    //this.cargando = true;
    await this.bd
      .getAllLugares()
      .toPromise()
      .then((resp: any) => {

        this.lugares = resp.results;

        console.log('MISLUGARES', this.lugares);

      });
  }

  ngOnInit() {
    this.cargarLugares();
  }
  
  onIonInfinite(ev: Event) {
    this.cargarLugares();
    setTimeout(() => {
      const infiniteScroll = ev.target as HTMLIonInfiniteScrollElement;
      infiniteScroll.complete();
    }, 500);
  }
}