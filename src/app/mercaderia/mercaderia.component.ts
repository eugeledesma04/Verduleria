import { Component, OnInit, Input } from '@angular/core';
import { ServicioCarritoService } from '../servicio-carrito.service';
import { Fruta, Verdura } from '../app.component';

@Component({
  selector: 'app-mercaderia',
  templateUrl: './mercaderia.component.html',
  styleUrls: ['./mercaderia.component.css']
})
export class MercaderiaComponent implements OnInit {
  public image?: string;
  public titulo: string = "";
  public subtitulo: string = "";
  public peso: number = 0;

  @Input()
  dataEntrante!: Fruta | Verdura;

  constructor(private servicioCarrito: ServicioCarritoService) { }

  ngOnInit(): void {
  }
/** 
 * Comprueba si el peso ingresado es mayor o igual a cero. Esto se hace para asegurarse de que el peso sea    válido y no negativo.
 * Calcula el precio subtotal multiplicando el precio por kilogramo del artículo (this.dataEntrante.precio) por  el peso ingresado (this.peso).
 * Crea un objeto mercaderiaEnCarrito que contiene la información del artículo a agregar al carrito, incluyendo el artículo en sí (this.dataEntrante), el peso, el precio subtotal, el título, la imagen y el subtitulo.
 * Emite un evento utilizando el servicio ServicioCarritoService para notificar a otros componentes que se ha agregado un artículo al carrito. El objeto mercaderiaEnCarrito se envía como dato dentro del evento.
 * En resumen, este método valida el peso ingresado, calcula el precio subtotal y agrega el artículo al carrito enviando un evento con la información relevante.
*/
  AgregarACarrito(): void {
    if (this.peso >= 0) {
      const precioSubtotal = this.dataEntrante.precio * this.peso;
      const mercaderiaEnCarrito = { 
        item: this.dataEntrante,
        peso: this.peso,
        precioSubtotal: precioSubtotal,
        titulo: this.dataEntrante.titulo,
        image: this.dataEntrante.image,
        subtitulo: this.dataEntrante.subtitulo
      };
      this.servicioCarrito.diparadorCarrito.emit({ data: mercaderiaEnCarrito });
    }
  }
}
