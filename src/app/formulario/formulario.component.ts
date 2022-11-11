import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  operandoA: number;
  operandoB: number;
  resultado: number;

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar():void{

    this.resultado = this.operandoA + this.operandoB;

    if( isNaN(this.resultado) ) this.resultado = 0;

    this.resultadoSuma.emit(this.resultado);

  }

  reiniciar():void{
    this.operandoA = 0;
    this.operandoB = 0;
    this.resultadoSuma.emit(0);
  }

}
