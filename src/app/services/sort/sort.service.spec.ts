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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('quick sort', () => {
    it('should sort the array in increasing order', (done: DoneFn) => {
      service.quickSort(sequence).subscribe((sorted) => {
        for(let i = 0; i < sorted.length-1; i++) {
          expect(sorted[i]).toBeLessThanOrEqual(sorted[i+1]);
        }
        done()
      });
    })
  })

});
