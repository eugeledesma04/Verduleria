import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercaderiaComponent } from './mercaderia.component';

describe('MercaderiaComponent', () => {
  let component: MercaderiaComponent;
  let fixture: ComponentFixture<MercaderiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MercaderiaComponent]
    });
    fixture = TestBed.createComponent(MercaderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
