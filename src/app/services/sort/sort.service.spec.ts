import { TestBed } from '@angular/core/testing';
import { doesNotReject } from 'assert';
import { Observable, Subject } from 'rxjs';

import { SortService, InsertionSortView, MergeSortView } from './sort.service';

describe('SortService', () => {
  let service: SortService;

  let sequence: number[];

  beforeEach(() => {
    sequence = [];
    for (let i = 10; i > 0; i--) {
      sequence.push(i);
    }
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

});
