import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebasModule } from './pruebas/pruebas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PruebasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
