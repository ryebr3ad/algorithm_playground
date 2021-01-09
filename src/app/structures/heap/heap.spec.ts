import { utf8Encode } from '@angular/compiler/src/util';
import { Heap, left, right, maxNonLeafNode } from './heap';

describe('Heap', () => {
  it('should create an instance', () => {
    expect(new Heap([])).toBeTruthy();
  });

  describe('shifting operations', () => {
    it('should correctly calculate the index of the left child', () => {
      expect(left(0)).toEqual(1);
      expect(left(1)).toEqual(3);
      expect(left(2)).toEqual(5);
    });

    it('should correctly calculate the index of the right child', () => {
      expect(right(0)).toEqual(2);
      expect(right(1)).toEqual(4);
      expect(right(2)).toEqual(6);
    });
  });

  describe('making a heap out of an array', () => {

    it('should take an arbitrary array and turn it into a heap', () => {
      let heap: Heap = new Heap([1, 5, 7, 4, 8, 9, 11, 2]);
      let heapSize: number = heap.heapSize;
      console.log(heap.tree);
      for (let i = maxNonLeafNode(heapSize); i >= 0; i--) {
        let l: number = left(i);
        if (l <= heapSize) {
          expect(heap.tree[i] >= heap.tree[l]).toBeTruthy();
        }
        let r: number = right(i);
        if (r <= heapSize) {
          expect(heap.tree[i] >= heap.tree[r]).toBeTruthy();
        }
      }
    });

  });
});
