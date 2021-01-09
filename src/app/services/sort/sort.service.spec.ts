import { TestBed } from '@angular/core/testing';
import { Observable, Subject } from 'rxjs';

import { SortService, InsertionSortView, MergeSortView } from './sort.service';

describe('SortService', () => {
  let service: SortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('insertion sort', () => {

    let sequence: number[];

    beforeEach(() => {
      sequence = [];
      for (let i = 100; i > 0; i--) {
        sequence.push(i);
      }
    });

    it('should return a number of iterations equal to the length of the array', (done: DoneFn) => {
      service.insertionSort(sequence).subscribe((iters: InsertionSortView) => {
        expect(iters.length).toEqual(sequence.length);
        done();
      });
    });

    it('should sort the array in increasing order', (done: DoneFn) => {
      service.insertionSort(sequence).subscribe((iters: InsertionSortView) => {
        let sortedSequence: number[] = iters[iters.length - 1].sequence;
        for (let i = 0; i < sortedSequence.length - 1; i++) {
          expect(sortedSequence[i]).toBeLessThanOrEqual(sortedSequence[i + 1]);
        }
        done();
      });
    })

  });

  describe('merge sort', () => {

    let sequence: number[];

    beforeEach(() => {
      sequence = [];
      for (let i = 10; i > 0; i--) {
        sequence.push(i);
      }
    });

    it('should sort the array in increasing order and stored in the first element of the array of iterations', (done: DoneFn) => {
      service.mergeSort(sequence).subscribe((iters: MergeSortView) => {
        let sorted: number[] = iters[iters.length-1][0].left;
        for(let i = 0; i < sorted.length-1; i++) {
          expect(sorted[i]).toBeLessThanOrEqual(sorted[i+1]);
        }
        done();
      });
    })
  })

});
