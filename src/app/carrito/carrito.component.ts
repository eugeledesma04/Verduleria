import { Component, OnInit } from '@angular/core';
import { ServicioCarritoService } from '../servicio-carrito.service';
import { Fruta, Verdura } from '../app.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public listaVideos: Array<any> = [];
  public carrito: (Fruta | Verdura)[] = [];

  constructor(private servicioCarrito: ServicioCarritoService) { }

 ngOnInit(): void {
    this.servicioCarrito.diparadorCarrito.subscribe((data: any) => {
      const mercaderiaEnCarrito = { ...data.data };
      this.carrito.push(mercaderiaEnCarrito);
    });
  }

  eliminarMercaderia(index: number): void {
    this.carrito.splice(index, 1);
  }
  
}
