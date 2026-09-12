import { Component } from '@angular/core';

 
@Component({
  selector: 'app-operas-bas',
  standalone: false,
  styleUrl: './operas-bas.css',
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1:string=''
  num2:string=''
  resultado:number=0
 
  operacion: string = 'sumar';
 
  calcular(): void {
    switch (this.operacion) {
      case 'sumar': this.sumar(); break;
      case 'restar': this.restar(); break;
      case 'multiplicar': this.multiplicar(); break;
      case 'dividir': this.dividir(); break;
    }
  }
  sumar():void{
    this.resultado= parseInt(this.num1)+parseInt(this.num2)
  }
  restar():void{
    this.resultado= parseInt(this.num1)-parseInt(this.num2)
  }
  multiplicar():void{
    this.resultado= parseInt(this.num1)*parseInt(this.num2)
  }
  dividir():void{
    this.resultado= parseInt(this.num1)/parseInt(this.num2)
  }
}
 

