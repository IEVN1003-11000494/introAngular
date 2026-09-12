import { Component, signal } from '@angular/core';


@Component({
 template:`<div>
    <h1>{{title}}</h1>
  <app-heroes-list></app-heroes-list>
</div>`,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  standalone: false
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
