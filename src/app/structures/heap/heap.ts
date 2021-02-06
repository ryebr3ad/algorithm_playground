export abstract class Heap {

    protected _heapSize: number;

    constructor(protected _tree: number[]) {
        this.buildHeap();
    }

    private buildHeap() {
        this._heapSize = this._tree.length;
        for (let i = maxNonLeafNode(this._heapSize); i >= 0; i--) {
            this.heapify(i);
        }
    }

    abstract heapify(i: number): void;

    public pop(): number {
        
        if (!this._heapSize) {
            return undefined;
        }

        let root = this._tree[0];
        this._tree[0] = this._tree[this._heapSize - 1];
        this._heapSize--;
        this.heapify(0);

        return root;
    }

    public get tree(): number[] {
        return this._tree.slice(0, this._heapSize);
    }

    public isEmpty(): boolean {
        return !this._heapSize;
    }

}

export class MaxHeap extends Heap {

    heapify(i: number) {
        let l: number = left(i);
        let r: number = right(i);
        let largest: number = i;
        if (l < this._heapSize && this._tree[l] > this._tree[i]) {
            largest = l;
        }
        if (r < this._heapSize && this._tree[r] > this._tree[largest]) {
            largest = r;
        }
        if (largest !== i) {
            [this._tree[i], this._tree[largest]] = [this._tree[largest], this._tree[i]];
            this.heapify(largest);
        }
    }

}

export class MinHeap extends Heap {

    heapify(i: number) {
        let l: number = left(i);
        let r: number = right(i);
        let smallest: number = i;
        if (l < this._heapSize && this._tree[l] < this._tree[i]) {
            smallest = l;
        }
        if (r < this._heapSize && this._tree[r] < this._tree[smallest]) {
            smallest = r;
        }
        if (smallest !== i) {
            [this._tree[i], this._tree[smallest]] = [this._tree[smallest], this._tree[i]];
            this.heapify(smallest);
        }
    }
}

export function left(i: number): number {
    return (i << 1) + 1;
}

export function right(i: number): number {
    return (i << 1) + 2
}

export function maxNonLeafNode(heapSize: number): number {
    return Math.floor(heapSize / 2) - 1;
}

