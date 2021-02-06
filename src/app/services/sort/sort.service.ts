import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Heap, MinHeap } from 'src/app/structures/heap/heap';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private http: HttpClient) { }

  insertionSort(elements: number[]): Observable<InsertionSortView> {
    return this.http.post<InsertionSortView>('api/sort/insertion', elements);

  }

  mergeSort(elements: number[]): Observable<MergeSortView> {
    return this.http.post<MergeSortView>('api/sort/merge', elements);
  }

  heapSort(elements: number[]): Observable<HeapSortView> {
    return this.http.post<HeapSortView>('api/sort/heap', elements);
  }

  quickSort(sequence: number[]): Observable<number[]> {
    let clonedSequence: number[] = Object.assign([], sequence);
    this.shuffleArray(clonedSequence);
    this.qsort(clonedSequence, 0, clonedSequence.length - 1);
    return of(clonedSequence);
  }

  private shuffleArray(sequence: number[]) {
    for (var i = sequence.length - 1; i > 0; i--) {
      var rand = Math.floor(Math.random() * (i + 1));
      [sequence[i], sequence[rand]] = [sequence[rand], sequence[i]]
    }
  }

  private qsort(sequence: number[], p: number, r: number) {
    if (p < r) {
      let q = this.partition(sequence, p, r);
      this.qsort(sequence, p, q - 1);
      this.qsort(sequence, q + 1, r);
    }
  }

  private partition(sequence: number[], p: number, r: number) {
    let x: number = sequence[r];
    let i = p - 1;
    for (let j = p; j <= r - 1; j++) {
      if (sequence[j] <= x) {
        i++;
        [sequence[i], sequence[j]] = [sequence[j], sequence[i]];
      }
    }
    [sequence[i + 1], sequence[r]] = [sequence[r], sequence[i + 1]];
    return i + 1;
  }
}

export type InsertionSortView = InsertionSortStats[];

export interface MergeSortView {
  pairLists: ArrayPair[][]
}

export interface ArrayPair {
  left: number[];
  right: number[];
}

export type HeapSortView = number[][];

export interface InsertionSortStats {
  focusIndex: number;
  sequence: number[];
}