import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos=[
    {id:1,nombre:'Tomates',descripcion:'$33.90kg',url:'assets/tomate.jpg',sonidos:'assets/tomate.ogg'},
    {id:2,nombre:'Lechugas',descripcion:'$4.50 c/u',url:'assets/lechuga.jpg',sonidos:'assets/lechuga.ogg'},
    {id:3,nombre:'Cebollas',descripcion:'$70kg',url:'assets/cebollas.jpg',sonidos:'assets/cebolla.ogg'},
    {id:4,nombre:'Pepinillos',descripcion:'$60kg',url:'assets/pepinillos.jpg',sonidos:'assets/pepinillos.ogg'},
    {id:5,nombre:'Chiles',descripcion:'$26kg',url:'assets/chiles.jpg',sonidos:'assets/chiles.ogg'},
    {id:6,nombre:'Manzanas',descripcion:'$42.90kg',url:'assets/manzana.jpg',sonidos:'assets/manzanas.ogg'},
    {id:7,nombre:'Sandias',descripcion:'$18.20kg',url:'assets/sandia.jpg',sonidos:'assets/sandia.ogg'},
    {id:8,nombre:'Naranjas',descripcion:'$21.90kg',url:'assets/naranjas.jpg',sonidos:'assets/naranja.ogg'},
    {id:9,nombre:'melon',descripcion:'$35.90kg',url:'assets/melon.jpg',sonidos:'assets/naranja.ogg'},
    {id:10,nombre:'frijol',descripcion:'$50.90kg',url:'assets/frijol.jpg',sonidos:'assets/naranja.ogg'},
    {id:11,nombre:'maiz',descripcion:'$10.90kg',url:'assets/maiz.jpeg',sonidos:'assets/naranja.ogg'},
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
