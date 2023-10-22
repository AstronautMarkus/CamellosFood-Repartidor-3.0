import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiPerfilDataPage } from './mi-perfil-data.page';

describe('MiPerfilDataPage', () => {
  let component: MiPerfilDataPage;
  let fixture: ComponentFixture<MiPerfilDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiPerfilDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
