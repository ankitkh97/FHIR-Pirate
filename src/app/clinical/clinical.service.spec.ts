/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClinicalService } from './clinical.service';

describe('Service: Clinical', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClinicalService]
    });
  });

  it('should ...', inject([ClinicalService], (service: ClinicalService) => {
    expect(service).toBeTruthy();
  }));
});
