import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  insertionSort(sequence: number[]): Observable<InsertionSortView[]> {
    let insertionSortIterations: InsertionSortView[] = [];
    let clonedSequence: number[] = Object.assign([], sequence);
    insertionSortIterations.push({ focusIndex: 0, sequence: Object.assign([], clonedSequence) });

    for (let j: number = 1; j < clonedSequence.length; j++) {
      let currentElement: number = clonedSequence[j];
      let i = j - 1;
      for (; i >= 0 && clonedSequence[i] > currentElement; i--) {
        [clonedSequence[i + 1], clonedSequence[i]] = [clonedSequence[i], clonedSequence[i + 1]];
      }
      insertionSortIterations.push({ focusIndex: i + 1, sequence: Object.assign([], clonedSequence) });
    }

    return of(insertionSortIterations);
  }

  mergeSort(sequence: number[]): Observable<MergeSortView> {
    let iterations: MergeSortView = [];
    iterations[0] = [];
    let lower: number = 0;
    let upper: number = sequence.length - 1;
    let middle: number = Math.floor((upper - lower) / 2);
    this.merge(iterations, sequence, lower, middle, upper, 1);
    iterations[0].push({left: Object.assign([], sequence), right: undefined});
    return of(iterations.reverse());
  }

  merge(iterations: MergeSortView, sequence: number[], lower: number, middle: number, upper: number, level: number): void {

    //Break case -- arrays of size one or less do not need to be divided any further
    if (lower >= upper) {
      return;
    }

    if(!iterations[level]) {
      iterations[level] = [];
    }
    /*
     * Recursive sequence sorting what will become the 'left' and 'right'
     * arrays in this current iteration of the algorithm using the
     * divide-and-conquer stragegy.  `merge()` will be called on
     * narrower and narrower lower and upper index values until the
     * array cannot be split any further, and the elements of `sequence`
     * between the determined lower and upper bounds will be sorted as the
     * calls to merge return
     */
    let leftMiddle: number = Math.floor((lower + middle) / 2);
    this.merge(iterations, sequence, lower, leftMiddle, middle, level+1);

    let rightMiddle: number = Math.floor((middle + upper) / 2);
    this.merge(iterations, sequence, middle + 1, rightMiddle, upper, level+1);

    /*
     * Starts the merging process; with the given lower, middle, and upper
     * indicies, create two arrays -- one of all elements to the left of
     * the middle, and one of all elements to the right.  The elements 
     * in these arrays will already be sorted.
     */ 
    let left: number[] = [];
    let right: number[] = [];

    let leftLength: number = middle - lower + 1;
    let rightLength: number = upper - middle;

    let pair: ArrayPair = {left: undefined, right: undefined};

    for (let i = 0; i < leftLength; i++) {
      left[i] = sequence[lower + i];
    }
    pair.left = Object.assign([], left);
    left[leftLength] = Number.POSITIVE_INFINITY;

    for (let j = 0; j < rightLength; j++) {
      right[j] = sequence[middle + j + 1];
    }
    pair.right = Object.assign([], right);
    right[rightLength] = Number.POSITIVE_INFINITY;

    iterations[level].push(pair);

    let leftIndex: number = 0;
    let rightIndex: number = 0;

    /*
     * From the lower bound to the upper bound, start sorting the elements of the left
     * and the right arrays, relative to how they compared to each other.  Once finished,
     * sequence[lower...upper] will be sorted.
     */
    for(let k = lower; k <= upper; k++) {
      if(left[leftIndex] < right[rightIndex]) {
        sequence[k] = left[leftIndex];
        leftIndex++;
      }
      else {
        sequence[k] = right[rightIndex];
        rightIndex++;
      }
    }
    
    
  }

}

export type MergeSortView = ArrayPair[][];

export interface ArrayPair {
  left: number[];
  right: number[];
}

export interface InsertionSortView {
  focusIndex: number;
  sequence: number[];
}