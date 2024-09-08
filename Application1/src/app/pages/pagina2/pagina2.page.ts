import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickyMortyBdService } from 'src/app/services/ricky-morty-bd.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  unIdPersonaje!:number;
  personaje:any;

  constructor(private activatedRoute: ActivatedRoute, 
              private bd: RickyMortyBdService,
              private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.unIdPersonaje = params['id'];

      console.log("IDPERSONAJE_PAGE2 ", this.unIdPersonaje);

      this.cargarPersonaje();
    })
  }

  ngOnInit() {
  }

  async cargarPersonaje() {

    await this.bd
      .getPersonajeById(this.unIdPersonaje)
      .toPromise()
      .then((resp: any) => {

        this.personaje = resp;
        console.log('MIPERSONAJE', this.personaje);

      });
  }

  Volver(){
    this.router.navigate(['./tabs/tab1'])
  }
}
