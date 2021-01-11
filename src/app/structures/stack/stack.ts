export class Stack<T> {

    private _top: number;
    private _stack: T[]

    constructor() {
        this._top = 0;
        this._stack = [];
    }

    isEmpty() {
        return this._top === 0
    }
    
    push(element: T) {
        this._stack[this._top++] = element;
    }

    pop(): T {
        if(this.isEmpty()) {
            throw new Error('Underflow');
        }
        else {
            this._top--;
            return this._stack[this._top];
        }
    }

}
