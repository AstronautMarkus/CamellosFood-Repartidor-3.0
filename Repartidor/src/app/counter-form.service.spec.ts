import { TestBed } from '@angular/core/testing';

import { CounterFormService } from './counter-form.service';

describe('CounterFormService', () => {
  let service: CounterFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
