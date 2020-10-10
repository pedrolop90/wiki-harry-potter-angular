import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonajeRoutingModule} from './personaje-routing.module';
import {ListarPersonajesComponent} from './listar-personajes/listar-personajes.component';


@NgModule({
  declarations: [ListarPersonajesComponent],
  exports: [ListarPersonajesComponent],
  imports: [
    CommonModule,
    PersonajeRoutingModule
  ]
})
export class PersonajeModule {
}
