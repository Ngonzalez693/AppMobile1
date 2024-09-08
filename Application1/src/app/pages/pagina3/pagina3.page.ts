import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickyMortyBdService } from 'src/app/services/ricky-morty-bd.service';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  unIdLugar!: number;
  lugar: any;
  personajes: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private bd: RickyMortyBdService,
              private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.unIdLugar = params['id'];

      console.log("IDPERSONAJE_PAGE3 ", this.unIdLugar);

      this.cargarLugar();
    })
  }

  ngOnInit() {
  }

  async cargarPersonajesPorOrigen(lugarName: string) {
    await this.bd.getAllPersonajes().toPromise().then((resp: any) => {
      this.personajes = resp.results.filter((personaje: any) => personaje.origin.name === lugarName);
      console.log('Personajes con origen en', lugarName, this.personajes);
    });
  }

  async cargarLugar() {

    await this.bd
      .getLugaresById(this.unIdLugar)
      .toPromise()
      .then((resp: any) => {

        this.lugar = resp;
        console.log('MILugar', this.lugar);
        this.cargarPersonajesPorOrigen(this.lugar.name);

      });
  }

  Volver() {
    this.router.navigate(['./tabs/tab2'])
  }
}
