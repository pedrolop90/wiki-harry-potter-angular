import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from './components/menu/menu.module';
import { PersonajeModule } from './components/personajes/personaje.module';
import { LugarModule } from './components/lugares/lugar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MenuModule,
    PersonajeModule,
    LugarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
