import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos=[
    {id:1,nombre:'Tomates',url:'assets/tomate.jpg',sonidos:'assets/tomate.ogg'},
    {id:2,nombre:'Lechugas',url:'assets/lechuga.jpg',sonidos:'assets/lechuga.ogg'},
    {id:3,nombre:'Cebollas',url:'assets/cebollas.jpg',sonidos:'assets/cebolla.ogg'},
    {id:4,nombre:'Pepinillos',url:'assets/pepinillos.jpg',sonidos:'assets/pepinillos.ogg'},
    {id:5,nombre:'Chiles',url:'assets/chiles.jpg',sonidos:'assets/chiles.ogg'},
    {id:6,nombre:'Manzanas',url:'assets/manzana.jpg',sonidos:'assets/manzanas.ogg'},
    {id:7,nombre:'Sandias',url:'assets/sandia.jpg',sonidos:'assets/sandia.ogg'},
    {id:8,nombre:'Naranjas',url:'assets/naranjas.jpg',sonidos:'assets/naranja.ogg'},
    ]
    constructor(){
      console.log(this.productos)
    }
    sonido(producto)
    {
      let sonido = new Audio();
      sonido.src=producto.sonidos;
      sonido.load();
      sonido.play();
    }
  ngOnInit() {
  }

}
