import { Stack } from './stack';

describe('Stack', () => {
  it('should create an instance', () => {
    expect(new Stack()).toBeTruthy();
  });

  it('should make an empty instance', () => {
    let stack: Stack<number> = new Stack<number>();
    expect(stack.isEmpty()).toBeTrue();
  });

  it('should pop the last element added', () => {
    let stack: Stack<number> = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.pop()).toEqual(4);
  });
});
