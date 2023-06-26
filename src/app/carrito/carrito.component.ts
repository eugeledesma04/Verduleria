import { Component, OnInit } from '@angular/core';
import { ServicioCarritoService } from '../servicio-carrito.service';
import { Fruta, Verdura } from '../app.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
/**
 * En el componente CarritoComponent, se declara una variable llamada carrito que es un array de objetos. Cada objeto en el array representa un artículo en el carrito y tiene las siguientes propiedades:
 * item: Puede ser un objeto de tipo Fruta o Verdura, ya que se utiliza la unión de tipos (Fruta | Verdura) para permitir ambos tipos de artículos en el carrito.
 * peso: Representa el peso del artículo en el carrito.
 * precioSubtotal: Representa el precio subtotal del artículo, calculado multiplicando el precio unitario del artículo por su peso.
 * titulo: El título del artículo.
 * image: La ruta de la imagen del artículo.
 * subtitulo: El subtitulo del artículo.
 * La variable carrito se inicializa como un array vacío [].
 * Además, se declara una variable precioTotal con un valor inicial de 0, que se utilizará para almacenar el precio total de todos los artículos en el carrito.
 * Estas variables se utilizan para almacenar y administrar los artículos agregados al carrito y el precio total acumulado.
 */
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
/**
 * Suscribe al observable diparadorCarrito del servicio ServicioCarritoService. Este observable se utiliza    para recibir eventos cuando se agrega un artículo al carrito.
 * Dentro de la función de suscripción, se crea una copia del objeto data.data recibido en el evento y se almacena en la variable mercaderiaEnCarrito.
 * Se agrega el objeto mercaderiaEnCarrito al array carrito, que representa la lista de artículos en el carrito.
 * Se suma el valor de precioSubtotal del artículo recién agregado al precioTotal. Esto se hace para mantener actualizado el precio total de todos los artículos en el carrito.
 * En resumen, este método se encarga de suscribirse a los eventos de agregar al carrito, agregar los artículos al array carrito y actualizar el precioTotal con el precio subtotal de cada artículo agregado.
 */
  ngOnInit(): void {
    this.servicioCarrito.diparadorCarrito.subscribe((data: any) => {
      const mercaderiaEnCarrito = { ...data.data };
      this.carrito.push(mercaderiaEnCarrito);
      this.precioTotal += mercaderiaEnCarrito.precioSubtotal;
    });
  }
/**
 * Se obtiene el objeto del artículo a eliminar utilizando el índice proporcionado y se almacena en la variable item.
 * Se utiliza el método splice() para eliminar el artículo del array carrito, utilizando el índice y la cantidad de elementos a eliminar (en este caso, solo se eliminará un elemento).
 * Se resta el valor de precioSubtotal del artículo eliminado del precioTotal. Esto se hace para actualizar correctamente el precio total después de eliminar un artículo del carrito.
 * En resumen, esta función elimina un artículo del carrito, actualiza el array carrito y actualiza el precioTotal restando el valor del precio subtotal del artículo eliminado.
 */
  eliminarMercaderia(index: number): void {
    const item = this.carrito[index];
    this.carrito.splice(index, 1);
    this.precioTotal -= item.precioSubtotal;
  }
}

