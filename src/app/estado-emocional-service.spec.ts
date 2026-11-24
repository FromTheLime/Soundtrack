import { TestBed } from '@angular/core/testing';
import { EstadoEmocionalService } from './estado-emocional-service';

describe('EstadoEmocionalService', () => {
  let service: EstadoEmocionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoEmocionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
