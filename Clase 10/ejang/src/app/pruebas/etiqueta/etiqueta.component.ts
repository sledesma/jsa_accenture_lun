import { Component, OnInit } from '@angular/core';
import { TextoService } from '../texto.service';

@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.component.html',
  styleUrls: ['./etiqueta.component.css']
})
export class EtiquetaComponent implements OnInit {

  constructor(
    private texto: TextoService
  ) { }

  ngOnInit(): void {
    console.log("Iniciando etiqueta");
    console.log(this.texto.getText());
  }

}
