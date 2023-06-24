import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  titulo: string;
  texto: string;
  boton: string;
  constructor(){
    this.titulo = "Tarea"; 
    this.texto = "Prueba Angular";
    this.boton = "Usuario";               
  }
  cambiarNombre(){
    this.boton = "Facu"
  }


}
