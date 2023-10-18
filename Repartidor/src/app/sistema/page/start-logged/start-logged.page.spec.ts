import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartLoggedPage } from './start-logged.page';

describe('StartLoggedPage', () => {
  let component: StartLoggedPage;
  let fixture: ComponentFixture<StartLoggedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StartLoggedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
