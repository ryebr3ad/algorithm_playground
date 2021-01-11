import { Queue } from './queue';

describe('Queue', () => {
  it('should create an instance', () => {
    expect(new Queue()).toBeTruthy();
  });

  it('should remove the first element added when dequeue() is called', () => {
    let queue: Queue<number> = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
  });
});
