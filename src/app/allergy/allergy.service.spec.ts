/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllergyService } from './allergy.service';

describe('Service: Allergy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllergyService]
    });
  });

  it('should ...', inject([AllergyService], (service: AllergyService) => {
    expect(service).toBeTruthy();
  }));
});
