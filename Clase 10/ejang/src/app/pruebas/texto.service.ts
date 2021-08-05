import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextoService {

  private texto: string = "Texto inicial";

  public getText(): string {
    return this.texto;
  }

  public setText(txt: string): void{
    this.texto = txt;
  }

}
