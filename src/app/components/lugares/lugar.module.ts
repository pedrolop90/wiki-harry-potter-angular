import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LugarRoutingModule} from './lugar-routing.module';
import {ListarLugaresComponent} from './listar-lugares/listar-lugares.component';


@NgModule({
  declarations: [ListarLugaresComponent],
  imports: [
    CommonModule,
    LugarRoutingModule
  ]
})
export class LugarModule {
}
