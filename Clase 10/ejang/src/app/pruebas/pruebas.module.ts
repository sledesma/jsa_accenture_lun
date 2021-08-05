import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoComponent } from './campo/campo.component';
import { EtiquetaComponent } from './etiqueta/etiqueta.component';
import { TextoService } from './texto.service';

@NgModule({
  declarations: [CampoComponent, EtiquetaComponent],
  providers: [TextoService],
  imports: [
    CommonModule
  ],
  exports: [CampoComponent, EtiquetaComponent]
})
export class PruebasModule { }
