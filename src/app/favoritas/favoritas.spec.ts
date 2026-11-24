import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Favoritas } from './favoritas';

describe('Favoritas', () => {
  let component: Favoritas;
  let fixture: ComponentFixture<Favoritas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Favoritas],
    }).compileComponents();

    fixture = TestBed.createComponent(Favoritas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
