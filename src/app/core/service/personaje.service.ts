import {Injectable} from '@angular/core';
import {PersonajeModel} from '../model/personaje.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private data: Array<PersonajeModel> = new Array<PersonajeModel>(
    {
      nombre: 'Harry Potter',
      descripcion: 'Persona Principal',
      image: 'https://cronicaglobal.elespanol.com/uploads/s1/16/75/63/7/harry-potter.jpeg',
      mensajeImagenAlt: 'no se pudo cargar la imagen'
    },
    {
      nombre: 'Hermione Granger',
      descripcion: 'Mujer Empoderada',
      image: 'https://i.pinimg.com/originals/65/3d/01/653d01c977ea7ce63d9eb06f5a273d7d.jpg',
      mensajeImagenAlt: 'no se pudo cargar la imagen'
    },
    {
      nombre: 'Ron Wesley',
      descripcion: 'Amigo Fiel',
      image: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/que-tienes-de-ron-weasley/120274313-1-esl-ES/Que-tienes-de-Ron-Weasley.jpg',
      mensajeImagenAlt: 'no se pudo cargar la imagen'
    }
  );

  constructor() {
  }

  public findAll(): Observable<Array<PersonajeModel>> {
    return of<Array<PersonajeModel>>(this.data);
  }

  public findById(id: number): Observable<PersonajeModel> {
    if (id == null || id >= this.data.length || id < 0) {
      return of<PersonajeModel>(null);
    }
    return of<PersonajeModel>(this.data[id]);
  }
}
