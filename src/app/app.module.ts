import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// necesitamos importar c/uno de nuestros componenentes creados para poder llamarlos
// ###  Componentes ###
  // es necesario importar la clase del componente

import { HeaderComponent } from './Components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';

// Para poder usar nuestro componentes requerimos agregarlos al array "declarations"
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, BodyComponent, FooterComponent]
})

export class AppModule { }
