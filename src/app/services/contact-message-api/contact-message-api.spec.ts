import { TestBed } from '@angular/core/testing';

import { ContactMessageApi } from './contact-message-api';

describe('ContactMessageApi', () => {
  let service: ContactMessageApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactMessageApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
