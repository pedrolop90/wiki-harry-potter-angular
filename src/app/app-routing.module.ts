import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'personajes', loadChildren: () => import('./components/personajes/personaje.module').then(mod => mod.PersonajeModule),
  },
  {
    path: 'lugares', loadChildren: () => import('./components/lugares/lugar.module').then(mod => mod.LugarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
