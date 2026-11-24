import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecomendaMusicas } from './recomenda-musicas';

describe('RecomendaMusicas', () => {
  let component: RecomendaMusicas;
  let fixture: ComponentFixture<RecomendaMusicas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendaMusicas],
    }).compileComponents();

    fixture = TestBed.createComponent(RecomendaMusicas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
