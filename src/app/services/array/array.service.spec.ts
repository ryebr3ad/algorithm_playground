import { TestBed } from '@angular/core/testing';

import { ArrayService, MaxSubarray } from './array.service';

describe('ArrayService', () => {
  let service: ArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('finding the maximum subarray', () => {

    it('should identify the whole array if the array is always increasing from i to i', () => {
      let sequence: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
      let maxSubarray: MaxSubarray = service.maximumSubarray(sequence);
      expect(maxSubarray.leftIndex).toEqual(0);
      expect(maxSubarray.rightIndex).toEqual(sequence.length-1);
    });

    it('should choose the smallest negative change in an all descending sequence', () => {
      let sequence: number[] = [20, 19, 17, 15, 13, 11, 9];
      let maxSubarray: MaxSubarray = service.maximumSubarray(sequence);
      expect(maxSubarray.leftIndex).toEqual(0);
      expect(maxSubarray.rightIndex).toEqual(1);
      expect(maxSubarray.sum).toEqual(-1);
    });

    it('should apply the algorithm correctly', () => {
      let sequenceOne: number[] = [105, 110, 100, 35, 90, 100];
      let sequenceTwo: number[] = [50, 10, 15, 12, 20, 30, 11, 15, 12, 40, 5];
     
      let maxSubarray: MaxSubarray = service.maximumSubarray(sequenceOne);
      expect(maxSubarray.leftIndex).toEqual(3);
      expect(maxSubarray.rightIndex).toEqual(5);
      expect(maxSubarray.sum).toEqual(65);

      maxSubarray = service.maximumSubarray(sequenceTwo);
      expect(maxSubarray.leftIndex).toEqual(1);
      expect(maxSubarray.rightIndex).toEqual(9);
      expect(maxSubarray.sum).toEqual(30);
    });
  });

});
