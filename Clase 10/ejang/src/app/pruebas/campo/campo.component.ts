import { Component, OnInit } from '@angular/core';
import { TextoService } from '../texto.service';

@Component({
  selector: 'app-campo',
  templateUrl: './campo.component.html',
  styleUrls: ['./campo.component.css']
})
export class CampoComponent implements OnInit {

  constructor(
    private texto: TextoService
  ) { }

  ngOnInit(): void {
    console.log("Iniciando campo");
    console.log(this.texto.getText());
    this.texto.setText("Este texto ha cambiado desde campo");
  }

}
