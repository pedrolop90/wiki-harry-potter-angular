import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListarPersonajesComponent} from './listar-personajes/listar-personajes.component';
import {DetallePersonajesComponent} from './detalle-personajes/detalle-personajes.component';

const routes: Routes = [
  {
    path: '', component: ListarPersonajesComponent,
  },
  {
    path: 'detalle/:id', component: DetallePersonajesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajeRoutingModule {
}
