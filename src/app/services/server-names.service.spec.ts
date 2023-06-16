import { TestBed } from '@angular/core/testing';

import { ServerNamesService } from './server-names.service';

describe('ServerNamesService', () => {
  let service: ServerNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
