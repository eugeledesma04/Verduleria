import { TestBed } from '@angular/core/testing';

import { ServicioCarritoService } from './servicio-carrito.service';

describe('ServicioFavoritosService', () => {
  let service: ServicioCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});