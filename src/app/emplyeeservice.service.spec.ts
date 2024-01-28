import { TestBed } from '@angular/core/testing';

import { EmplyeeserviceService } from './emplyeeservice.service';

describe('EmplyeeserviceService', () => {
  let service: EmplyeeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplyeeserviceService);
  });

});
