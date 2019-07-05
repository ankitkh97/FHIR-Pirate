/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImmunizationService } from './immunization.service';

describe('Service: Immunization', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImmunizationService]
    });
  });

  it('should ...', inject([ImmunizationService], (service: ImmunizationService) => {
    expect(service).toBeTruthy();
  }));
});
