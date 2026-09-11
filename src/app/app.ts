import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterOutlet, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title:string='Carlos Alberto Guerrero Garcia'
  duplicarnumero(a:number):number{
    return a*2
  }
  pelicula={
    titulo: "Spiderman",
    fechaLanzamiento: new Date(),
    precio: 2353
  }
}
