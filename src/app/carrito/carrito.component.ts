import { Component, OnInit } from '@angular/core';
import { ServicioCarritoService } from '../servicio-carrito.service';
import { Fruta, Verdura } from '../app.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public carrito: {
    item: Fruta | Verdura,
    peso: number,
    precioSubtotal: number,
    titulo: string,
    image: string,
    subtitulo: string
  }[] = [];
  public precioTotal: number = 0;

  constructor(private servicioCarrito: ServicioCarritoService) { }

  ngOnInit(): void {
    this.servicioCarrito.diparadorCarrito.subscribe((data: any) => {
      const mercaderiaEnCarrito = { ...data.data };
      this.carrito.push(mercaderiaEnCarrito);
      this.precioTotal += mercaderiaEnCarrito.precioSubtotal;
    });
  }

  eliminarMercaderia(index: number): void {
    const item = this.carrito[index];
    this.carrito.splice(index, 1);
    this.precioTotal -= item.precioSubtotal;
  }
}

