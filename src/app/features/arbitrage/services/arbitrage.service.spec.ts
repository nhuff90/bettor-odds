import { TestBed } from '@angular/core/testing';

import { ArbitrageService } from '../../core/services/arbitrage.service';

describe('ArbitrageService', () => {
  let service: ArbitrageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbitrageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
