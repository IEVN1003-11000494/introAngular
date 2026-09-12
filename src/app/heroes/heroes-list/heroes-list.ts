import { Component } from '@angular/core';
import {IHeroe} from '../heroe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {
imageWidth:number=40;
imageMargin:number=2;
muestraImagen:boolean=true;
listFilter:string='';
showImage():void{
  this.muestraImagen=!this.muestraImagen;//enlace de evento

}

heroes:IHeroe[]=[
{
  imagen:"https://dragonball-api.com/characters/goku_normal.webp",
  nombre:'Goku',
  descripcion:'Kame hame ha',
  race: 'Sayan',
  ki:9000
},
{
  imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
  nombre:'Vegeta',
  descripcion:'Final Flash',
  race: 'Sayan',
  ki:8500
},
{
  imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
  nombre:'Piccolo',
  descripcion:'Makankosappo',
  race: 'Namekiano',
  ki:7000
},
{
  imagen:"https://dragonball-api.com/characters/Freezer.webp",
  nombre:'Freezer',
  descripcion:'Death Ball',
  race: 'Alien',
  ki:9500
},

]

}
