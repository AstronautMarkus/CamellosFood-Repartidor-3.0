import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiPerfilOptionsPage } from './mi-perfil-options.page';

describe('MiPerfilOptionsPage', () => {
  let component: MiPerfilOptionsPage;
  let fixture: ComponentFixture<MiPerfilOptionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiPerfilOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
