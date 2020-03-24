import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoGraficoComponent } from './metodo-grafico.component';

describe('MetodoGraficoComponent', () => {
  let component: MetodoGraficoComponent;
  let fixture: ComponentFixture<MetodoGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodoGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
