import { Component, OnInit } from '@angular/core';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}


@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  map = null

  constructor() { }

  loadMap() {
    // crear un mapa usando HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // creando un latLNng
    const myLatLng = {lat: 25.814473661388384, lng:-100.17526505452071};
    // mapa creado
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position:{
          lat:25.814473661388384,
          lng:-100.17526505452071
        },
        title:'Granja de eduardo'
      };
      this.addMarker(marker);
    });
  }

  ngOnInit() {
    this.loadMap();
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

}
