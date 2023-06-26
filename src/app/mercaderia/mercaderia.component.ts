import { Component, OnInit, Input } from '@angular/core';
import { ServicioCarritoService } from '../servicio-carrito.service';


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

  @Input() dataEntrante: any;

  constructor(private servicioCarrito: ServicioCarritoService) { }

  ngOnInit(): void {
  }

  AgregarACarrito(): void {
    if (this.peso >= 0) {
    const mercaderiaEnCarrito = { ...this.dataEntrante, peso: this.peso };
    this.servicioCarrito.diparadorCarrito.emit({ data: mercaderiaEnCarrito });
  }
  }
}
