import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_RM } from '../config/url.servicios';
import { map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickyMortyBdService {

  constructor(private http: HttpClient) { }

  
  getAllPersonajes(): any {

    let url = `${URL_RM}/character`;

    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('PERSONAJES_RM', res);
        return res;
      })
    );
  }

  getPersonajeById(unId:number): any {

    let url = `${URL_RM}/character/${unId}`;

    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('PERSONAJE', res);
        return res;
      })
    );
  }

  getAllLugares(): any {

    let url = `${URL_RM}/location`;

    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('Lugares_RM', res);
        return res;
      })
    );
  }

  getLugaresById(unId:number): any {

    let url = `${URL_RM}/location/${unId}`;

    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('LUGAR', res);
        return res;
      })
    );
  }
}
