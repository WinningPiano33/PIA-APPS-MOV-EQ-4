import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  // booleano para indicar si se muestra o no la linterna
  public active: boolean;
 
  // inyectamos flashlight
  constructor(
    private flashlight: Flashlight
  ) {
    this.active = false;
  }
 
  flash(){
    this.active = !this.active;
 
    // si esta activo, encendemos la linterna, sino la apagamos
    if(this.active){
      this.flashlight.switchOn();
    }else{
      this.flashlight.switchOff();
    }
 
  }
 
}

