import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListarLugaresComponent} from './listar-lugares/listar-lugares.component';

const routes: Routes = [
  {
    path: '', component: ListarLugaresComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LugarRoutingModule {
}
