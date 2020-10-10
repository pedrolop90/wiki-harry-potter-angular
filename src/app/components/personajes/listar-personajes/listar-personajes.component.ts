import {Component, OnInit} from '@angular/core';
import {PersonajeModel} from '../../../core/model/personaje.model';
import {PersonajeService} from '../../../core/service/personaje.service';

@Component({
  selector: 'app-listar-personajes',
  templateUrl: './listar-personajes.component.html'
})
export class ListarPersonajesComponent implements OnInit {

  public personajes: Array<PersonajeModel>;

  constructor(
    private personaService: PersonajeService
  ) {
  }

  ngOnInit(): void {
    this.cargarPersonajes();
  }

  cargarPersonajes(): void {
    this.personaService.findAll().subscribe(value => this.personajes = value);
  }

}
