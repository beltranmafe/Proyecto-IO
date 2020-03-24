import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Metodo2fasesComponent } from './metodo2fases.component';

describe('Metodo2fasesComponent', () => {
  let component: Metodo2fasesComponent;
  let fixture: ComponentFixture<Metodo2fasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Metodo2fasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Metodo2fasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
