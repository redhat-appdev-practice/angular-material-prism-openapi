import { TestBed } from '@angular/core/testing';

import { APIConfigurationService } from './apiconfiguration.service';

describe('APIConfigurationService', () => {
  let service: APIConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
