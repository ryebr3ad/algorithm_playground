import { queue } from "rxjs";

export class Queue<T> {

    private _queue: T[];
    private _head: number;
    private _tail: number;

    constructor(private _length = 10) {
        this._queue = [];
        this._head = 0;
        this._tail = 0;
    }

    enqueue(element: T) {
        this._queue[this._tail] = element;
        this._tail = this.updatePosition(this._tail);
    }

    dequeue(): T {
        let element: T = this._queue[this._head];
        this._head = this.updatePosition(this._head);
        return element;
    }

    private updatePosition(pos: number): number {
        let newPos: number = pos
        if(newPos === (this._length - 1)) {
            newPos = 0;
        }
        else {
            newPos++
        }
        return newPos;
    }

}
