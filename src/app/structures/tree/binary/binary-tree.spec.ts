import { ExpectedConditions } from 'protractor';
import { BinaryTree } from './binary-tree';

describe('BinaryTree', () => {

  let tree: BinaryTree<number>;

  beforeEach(() => {
    tree = new BinaryTree<number>();
    tree.add(5);
    tree.add(1);
    tree.add(3);
    tree.add(8);
    tree.add(2);
  })

  it('should create an instance', () => {
    expect(new BinaryTree()).toBeTruthy();
  });

  it('should add nodes in order', () => {

    let elements: number[] = tree.all();
    for (let i = 0; i < elements.length - 1; i++) {
      expect(elements[i]).toBeLessThanOrEqual(elements[i + 1]);
    }
  });

  it('should find a node in the tree', () => {
    expect(tree.find(5)).toEqual(5);
    expect(tree.find(Number.NEGATIVE_INFINITY)).toBeNull();
  });

  it('should find the minimum key', () => {
    expect(tree.min()).toEqual(1);
  });

  it('should find the maximum key', () => {
    expect(tree.max()).toEqual(8);
  });

  it('should find the successor of a given element', () => {
    expect(tree.successor(1).key).toEqual(2);
    expect(tree.successor(2).key).toEqual(3);
    expect(tree.successor(8)).toBeNull();
  });

  it('should find the predecessor of a given element', () => {
    expect(tree.predecessor(8).key).toEqual(5);
    expect(tree.predecessor(2).key).toEqual(1);
    expect(tree.predecessor(1)).toBeNull();    
  });

  it('should cleanly delete a node with no children', () => {
    let leafyTree: BinaryTree<number> = new BinaryTree<number>();
    leafyTree.add(5);
    leafyTree.add(4);
    leafyTree.add(6);
    expect(leafyTree.delete(6)).toBeTrue();
    expect(leafyTree.find(6)).toBeNull();

    let elements: number[] = leafyTree.all();
    for (let i = 0; i < elements.length - 1; i++) {
      expect(elements[i]).toBeLessThanOrEqual(elements[i + 1]);
    }
  });

  it('should cleanly delete a node with one child', () => {
    let onlyChildTree: BinaryTree<number> = new BinaryTree<number>();
    onlyChildTree.add(5);
    onlyChildTree.add(4);
    onlyChildTree.add(7);
    onlyChildTree.add(6);

    expect(onlyChildTree.delete(7)).toBeTrue();
    expect(onlyChildTree.find(7)).toBeNull();

    let elements: number[] = onlyChildTree.all();
    for (let i = 0; i < elements.length - 1; i++) {
      expect(elements[i]).toBeLessThanOrEqual(elements[i + 1]);
    }
  });

  it('should cleanly delete a node with two children', () => {
    let busyTree: BinaryTree<number> = new BinaryTree<number>();
    busyTree.add(5);
    busyTree.add(4);
    busyTree.add(7);
    busyTree.add(6);
    busyTree.add(9);
    busyTree.add(8);
    busyTree.add(10);

    expect(busyTree.delete(7)).toBeTrue();
    expect(busyTree.find(7)).toBeNull();

    let elements: number[] = busyTree.all();
    for (let i = 0; i < elements.length - 1; i++) {
      expect(elements[i]).toBeLessThanOrEqual(elements[i + 1]);
    }

  })

});
