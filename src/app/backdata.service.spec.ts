import { TestBed } from '@angular/core/testing';

import { BackdataService } from './backdata.service';

describe('BackdataService', () => {
  let service: BackdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
