export class Heap {

    private _heapSize: number;

    constructor(private _tree: number[]) {
        this.buildMaxHeap();
    }

    private buildMaxHeap() {
        this._heapSize = this.tree.length - 1;
        for (let i = maxNonLeafNode(this._heapSize); i >= 0; i--) {
            this.maxHeapify(i);
        }
    }

    private maxHeapify(i: number) {
        let l: number = left(i);
        let r: number = right(i);
        let largest: number = i;
        if (l <= this.heapSize && this.tree[l] > this.tree[i]) {
            largest = l;
        }
        if (r <= this.heapSize && this.tree[r] > this.tree[largest]) {
            largest = r;
        }
        if (largest !== i) {
            [this.tree[i], this.tree[largest]] = [this.tree[largest], this.tree[i]];
            this.maxHeapify(largest);
        }
    }

    public get tree(): number[] {
        return this._tree;
    }

    public get heapSize(): number {
        return this._heapSize;
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