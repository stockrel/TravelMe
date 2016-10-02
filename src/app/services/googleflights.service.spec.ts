/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleflightsService } from './googleflights.service';

describe('Service: Googleflights', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleflightsService]
    });
  });

  it('should ...', inject([GoogleflightsService], (service: GoogleflightsService) => {
    expect(service).toBeTruthy();
  }));
});
