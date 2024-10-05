import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  private _localPersonajes: any[] = [];
  private favoritosSubject = new BehaviorSubject<any[]>([]);

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadFvorites();
  }

  get favoritos$() {
    return this.favoritosSubject.asObservable(); // Observable para los favoritos
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  getLocalPersonajes(){
    return [ ...this._localPersonajes ]
  }

  async saveRemovePersonaje(personaje:any){
    const exists = this._localPersonajes.find(localPersonaje => localPersonaje.id === personaje.id);

    if(exists){
      this._localPersonajes = this._localPersonajes.filter(localPersonaje => localPersonaje.id !== personaje.id);
    } else {
      this._localPersonajes = [personaje, ...this._localPersonajes];
    }

    await this._storage?.set('personajes', this._localPersonajes);
    this.favoritosSubject.next(this._localPersonajes);
  }

  async loadFvorites(){

    try{
      const PERSONAJES = await this._storage?.get('personajes');
      this._localPersonajes = PERSONAJES || [];
      this.favoritosSubject.next(this._localPersonajes);
    }
    catch (error){
      console.error('Error al cargar favoritos', error);
    }
  }

  public personajeInFavorites(personaje:any){
    return !!this._localPersonajes.find(localPersonaje => localPersonaje.id === personaje.id);
  }

}
