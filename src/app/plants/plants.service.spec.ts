/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantsService } from './plants.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Plant', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantsService]
    });
  });

  it('should ...', inject([PlantsService], (service: PlantsService) => {
    expect(service).toBeTruthy();
  }));

});
