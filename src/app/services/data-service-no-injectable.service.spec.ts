import { TestBed } from '@angular/core/testing';

import { DataServiceNoInjectableService } from './data-service-no-injectable.service';

describe('DataServiceNoInjectableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataServiceNoInjectableService = TestBed.get(DataServiceNoInjectableService);
    expect(service).toBeTruthy();
  });
});
