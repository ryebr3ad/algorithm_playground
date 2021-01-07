import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor() { }

  maximumSubarray(sequence: number[]): MaxSubarray {
    let differenceArray: number[] = this.differenceArray(sequence);
    return this.findMaximumSubarray(differenceArray, 0, differenceArray.length-1);
  }

  private findMaximumSubarray(sequence: number[], low: number, high: number): MaxSubarray {
    if (high == low) {
      return { leftIndex: low, rightIndex: high + 1, sum: sequence[low] };
    }
    else {
      let mid = Math.floor((low + high) / 2);
      let leftMax: MaxSubarray = this.findMaximumSubarray(sequence, low, mid);
      let rightMax: MaxSubarray = this.findMaximumSubarray(sequence, mid + 1, high);
      let crossingMax: MaxSubarray = this.findMaxCrossingSubArray(sequence, low, mid, high);

      if (leftMax.sum >= rightMax.sum && leftMax.sum >= crossingMax.sum) {
        return leftMax;
      }
      else if (rightMax.sum >= leftMax.sum && rightMax.sum >= crossingMax.sum) {
        return rightMax;
      }
      else {
        return crossingMax;
      }
    }
  }

  private findMaxCrossingSubArray(sequence: number[], low: number, mid: number, high: number): MaxSubarray {

    let leftSum: number = Number.NEGATIVE_INFINITY;
    let sum: number = 0;
    let maxLeft: number = mid;
    for (let i = mid; i >= low; i--) {
      sum += sequence[i];
      if (sum > leftSum) {
        leftSum = sum;
        maxLeft = i;
      }
    }

    let rightSum: number = Number.NEGATIVE_INFINITY;
    let maxRight: number = mid + 1;
    sum = 0;

    for (let j = mid + 1; j <= high; j++) {
      sum += sequence[j];
      if (sum > rightSum) {
        rightSum = sum;
        maxRight = j;
      }
    }

    return { leftIndex: maxLeft, rightIndex: maxRight + 1, sum: leftSum + rightSum };
  }

  private differenceArray(sequence: number[]): number[] {
    let differenceArray = [];
    for (let i = 0; i < sequence.length - 1; i++) {
      differenceArray[i] = sequence[i + 1] - sequence[i];
    }
    return differenceArray;
  }

}

export interface MaxSubarray {
  leftIndex: number;
  rightIndex: number;
  sum: number;
}