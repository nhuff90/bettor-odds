import { TestBed } from '@angular/core/testing';

import { MockOddsService } from './mock-odds.service';

describe('MockOddsService', () => {
  let service: MockOddsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockOddsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
