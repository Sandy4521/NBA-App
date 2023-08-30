import { TestBed } from '@angular/core/testing';

import { NbaScraperService } from './nba-scraper.service';

describe('NbaScraperService', () => {
  let service: NbaScraperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaScraperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
