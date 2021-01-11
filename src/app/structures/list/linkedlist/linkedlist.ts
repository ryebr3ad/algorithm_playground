import { ThrowStmt } from "@angular/compiler";
import { Node } from "../node";

export class LinkedList<T> {

    private nil: LinkedListNode<T>;

    constructor() {
        this.nil = new LinkedListNode<T>(null);
        this.nil.next = this.nil;
        this.nil.prev = this.nil;
    }

    isEmpty(): boolean {
        return this.nil.next === this.nil;
    }

    add(element: T) {
        let newNode: LinkedListNode<T> = new LinkedListNode<T>(element);

        //Set the old tail's next reference to the new element.
        this.tail.next = newNode;

        //The new nodes previous reference will be the old tail
        newNode.prev = this.tail;

        //update the current tail to be the new node
        this.tail = newNode;

    }

    find(element: T): T {
        let foundNode: LinkedListNode<T> = this.findNode(element);
        return foundNode.key;
    }

    all(): T[] {
        let currNode: LinkedListNode<T> = this.head;
        let elements: T[] = [];
        while (currNode !== this.nil) {
            elements.push(currNode.key);
            currNode = currNode.next;
        }
        return elements;
    }

    remove(element: T): boolean {
        let foundNode: LinkedListNode<T> = this.findNode(element);
        if (foundNode === this.nil) {
            return false;
        }
        foundNode.prev.next = foundNode.next;
        foundNode.next.prev = foundNode.prev;

        delete foundNode.prev;
        delete foundNode.next;

        return true;
    }

    private get tail(): LinkedListNode<T> {
        return this.nil.prev;
    }

    private set tail(element: LinkedListNode<T>) {
        this.nil.prev = element;
        this.nil.prev.next = this.nil;
    }

    private get head(): LinkedListNode<T> {
        return this.nil.next;
    }

    private set head(element: LinkedListNode<T>) {
        this.nil.next = element;
        this.nil.next.prev = this.nil;
    }

    private findNode(element: T): LinkedListNode<T> {
        let currNode: LinkedListNode<T> = this.head;
        while (currNode !== this.nil) {
            if (currNode.key === element) {
                break;
            }
            currNode = currNode.next;
        }
        return currNode;
    }

}

class LinkedListNode<T> extends Node<T> {

    public prev: LinkedListNode<T>;
    public next: LinkedListNode<T>;

}