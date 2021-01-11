import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { LinkedList } from './linkedlist';

describe('Linkedlist', () => {

  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
    for(let i = 1; i <= 10; i++) {
      list.add(i);
    }
  });

  it('should create an instance', () => {
    expect(new LinkedList()).toBeTruthy();
  });

  it('should add all elements in the order that they were added', () => {
    let elements: number[] = list.all();
    for(let i = 0; i < elements.length; i++) {
      expect(elements[i]).toEqual(i+1);  
    }
  });

  it('should find a node', () => {
    expect(list.find(2)).toEqual(2);
    expect(list.find(44)).toBeNull();
  });

  it('should remove a node', () => {
    expect(list.remove(4)).toBeTrue();
    expect(list.find(4)).toBeNull();
    console.log(list.all());
  });
});
