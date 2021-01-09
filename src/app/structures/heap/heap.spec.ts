import { utf8Encode } from '@angular/compiler/src/util';
import { Heap, left, right, maxNonLeafNode, MaxHeap, MinHeap } from './heap';

describe('MaxHeap', () => {
  it('should create an instance', () => {
    expect(new MaxHeap([])).toBeTruthy();
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
      let heap: Heap = new MaxHeap([1, 5, 7, 4, 8, 9, 11, 2]);
      let tree: number[] = heap.tree;
      for (let i = maxNonLeafNode(tree.length); i >= 0; i--) {
        let l: number = left(i);
        if (l < tree.length) {
          expect(tree[i] >= tree[l]).toBeTruthy();
        }
        let r: number = right(i);
        if (r < tree.length) {
          expect(tree[i] >= tree[r]).toBeTruthy();
        }
      }
    });

  });

  describe('popping heap elements', () => {

    it('should pop the top element, which will be the largest of the heap', () => {
      let heap: Heap = new MaxHeap([1, 5, 7, 4, 8, 9, 11, 2]);
      expect(heap.pop()).toEqual(11);
      expect(heap.pop()).toEqual(9);
      expect(heap.pop()).toEqual(8);
    });

  });

});

describe('MinHeap', () => {

  describe('making a heap out of an array', () => {

    it('should take an arbitrary array and turn it into a heap', () => {
      let heap: Heap = new MinHeap([1, 5, 7, 4, 8, 9, 11, 2]);
      let tree: number[] = heap.tree;
      for (let i = maxNonLeafNode(tree.length); i >= 0; i--) {
        let l: number = left(i);
        if (l < tree.length) {
          expect(tree[i] <= tree[l]).toBeTruthy();
        }
        let r: number = right(i);
        if (r < tree.length) {
          expect(tree[i] <= tree[r]).toBeTruthy();
        }
      }
    });

    it('should pop the top element, which will be the smallest of the heap', () => {
      let heap: Heap = new MinHeap([1, 5, 7, 4, 8, 9, 11, 2]);
      expect(heap.pop()).toEqual(1);
      expect(heap.pop()).toEqual(2);
      expect(heap.pop()).toEqual(4);
    });

  });
})