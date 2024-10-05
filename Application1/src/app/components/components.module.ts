import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { PersonajeComponent } from "./personaje/personaje.component";
import { PersonajesComponent } from "./personajes/personajes.component";
import { LugarComponent } from "./lugar/lugar.component";
import { LugaresComponent } from "./lugares/lugares.component";
import { FavoritosComponent } from "./favoritos/favoritos.component";

@NgModule({
    declarations: [
        PersonajeComponent,
        PersonajesComponent,
        LugarComponent,
        LugaresComponent,
        FavoritosComponent],
    imports: [
        CommonModule, 
        IonicModule],
    exports: [
        PersonajeComponent, 
        PersonajesComponent,
        LugarComponent,
        LugaresComponent,
        FavoritosComponent]
})
export class ComponentsModule { }