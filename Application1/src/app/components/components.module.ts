import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { PersonajeComponent } from "./personaje/personaje.component";
import { PersonajesComponent } from "./personajes/personajes.component";
import { LugarComponent } from "./lugar/lugar.component";
import { LugaresComponent } from "./lugares/lugares.component";

@NgModule({
    declarations: [
        PersonajeComponent,
        PersonajesComponent,
        LugarComponent,
        LugaresComponent],
    imports: [
        CommonModule, 
        IonicModule],
    exports: [
        PersonajeComponent, 
        PersonajesComponent,
        LugarComponent,
        LugaresComponent]
})
export class ComponentsModule { }