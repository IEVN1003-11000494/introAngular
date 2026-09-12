import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false, 
  styleUrl: './distancia.css', 
  templateUrl: './distancia.html',
})
export class DistanciaComponent {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  resultado: number = 0;

  calcularDistancia(): void {
    const difX = this.x2 - this.x1;
    const difY = this.y2 - this.y1;
    this.resultado = Math.sqrt(Math.pow(difX, 2) + Math.pow(difY, 2));
  }
}