/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormCollectionService } from './form-collection.service';

describe('Service: FormCollection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormCollectionService]
    });
  });

  it('should ...', inject([FormCollectionService], (service: FormCollectionService) => {
    expect(service).toBeTruthy();
  }));
});
