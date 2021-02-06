import { LinkedList } from "../../list/linkedlist/linkedlist";

export class ListGraph<T>{

    private adjacencyList: LinkedList<T>[];

    constructor(private vertices: T[], private graphType: GraphType = GraphType.UNDIRECTED) {
        this.adjacencyList = [];
        for(let i = 0; i < vertices.length; i++) {
            this.adjacencyList[i] = new LinkedList<T>();
        }
    }

    hasVertex(vertex: T): boolean {
        return this.vertices.includes(vertex);
    }

    addEdge(from: T, to: T) {
        if(!this.vertices.includes(from)) {
            throw new Error(`${from} is not a vertex stored in this graph`);
        }
        if(!this.vertices.includes(to)) {
            throw new Error(`${to} is not a vertex stored in this graph`);
        }
        this.adjacencyList[this.getIndex(from)].add(to);
        if(this.graphType === GraphType.UNDIRECTED) {
            this.adjacencyList[this.getIndex(to)].add(from);
        }
    }

    hasEdge(from: T, to: T): boolean {
        let edge: T = this.adjacencyList[this.getIndex(from)].find(to);
        return !!edge;
    }

    private getIndex(vertex: T): number {
        return this.vertices.indexOf(vertex);
    }

}

export enum GraphType {
    UNDIRECTED, DIRECTED
}