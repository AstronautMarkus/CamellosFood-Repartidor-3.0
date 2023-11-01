import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormFinalizarPedidoPage } from './form-finalizar-pedido.page';

describe('FormFinalizarPedidoPage', () => {
  let component: FormFinalizarPedidoPage;
  let fixture: ComponentFixture<FormFinalizarPedidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormFinalizarPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
