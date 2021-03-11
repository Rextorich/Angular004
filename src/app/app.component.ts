import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diaSemana: string = 'Domingo';
  nombre:string = 'Luis';
  apellido:string = 'Torres';
  cadenaTexto:string = 'Ingrese su nombre';
  activado = true;
  rutaImagen: string = "https://w7.pngwing.com/pngs/752/651/png-transparent-angularjs-vue-js-others-angle-rectangle-triangle.png"

  // EVENT BINDING
  textoEventBinding:string = 'Este es un ejemplo de event binding';

  // two way binding
  cadenaTwoWayBinding: string = 'FISEI';

  constructor(){
    /* FUNCION DE FLECHA*/
    /* cuando se haga referencia a datos de la clase usar THIS */
    setInterval(()=>(this.activado = false), 3000);
  }
  sumar(x: number, y: number){
    return x+y;
  }
  mostrarTexto(){
    return this.cadenaTexto;
  }

  // event binding metodo
  cambiarTexto(): void{
    this.textoEventBinding = "El texto ha cambiado usando Event Binding";
  }
}
