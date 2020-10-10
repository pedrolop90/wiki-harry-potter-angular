import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonajeRoutingModule} from './personaje-routing.module';
import {ListarPersonajesComponent} from './listar-personajes/listar-personajes.component';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';


@NgModule({
  declarations: [ListarPersonajesComponent, DetallePersonajesComponent],
  imports: [
    CommonModule,
    PersonajeRoutingModule
  ]
})
export class PersonajeModule {
}
