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
