import { TestBed } from '@angular/core/testing';

import { DataServiceRootService } from './data-service-root.service';

describe('DataServiceRootService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataServiceRootService = TestBed.get(DataServiceRootService);
    expect(service).toBeTruthy();
  });
});
