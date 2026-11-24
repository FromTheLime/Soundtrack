import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelecionaEstadoEmocional } from './seleciona-estado-emocional';

describe('SelecionaEstadoEmocional', () => {
  let component: SelecionaEstadoEmocional;
  let fixture: ComponentFixture<SelecionaEstadoEmocional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionaEstadoEmocional],
    }).compileComponents();

    fixture = TestBed.createComponent(SelecionaEstadoEmocional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
