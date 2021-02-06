import { xor } from "src/utils";

const LEFT: string = 'left';
const RIGHT: string = 'right';

export class BinaryTree<T> {

    public root: BinaryTreeNode<T>;


    /**
     * Get all elements of the tree returned in order
     *  
     * @returns T[] with elemenets in sorted order
     */
    all(): T[] {
        let elements: T[] = [];
        this.inOrderTraversalWithArray(elements, this.root);
        return elements;
    }

    /**
     * Adds new element to the tree given the element's natural ordering.  Collisions will
     * always tend towards the right.
     * 
     * @param element the new element to be added to the tree.
     */
    add(element: T) {
        let newNode: BinaryTreeNode<T> = new BinaryTreeNode<T>(element);
        let parentNode: BinaryTreeNode<T> = null;

        //Traverse the tree starting at the root
        let currNode: BinaryTreeNode<T> = this.root;
        while (currNode) {
            parentNode = currNode;
            if (newNode.key < currNode.key) {
                currNode = currNode.left;
            }
            else {
                currNode = currNode.right;
            }
        }

        //A falsy parentNode implies that the tree could not be traversed, meaning the root is null
        if (!parentNode) {
            this.root = newNode;
        }
        //Otherwise, set the new node to the left or the right, depending on the ordering
        else if (newNode.key < parentNode.key) {
            parentNode.left = newNode;
            newNode.parent = parentNode;
        }
        else {
            parentNode.right = newNode;
            newNode.parent = parentNode;
        }
    }

    /**
     * Return the element value if it exists in the tree, or null if not.
     * 
     * @param element the value to be found
     */
    find(element: T): T {
        let foundNode: BinaryTreeNode<T> = this.findNode(element, this.root);
        return foundNode ? foundNode.key : null;
    }

    /**
     * Find the minimum value associated with the tree rooted at `node`
     * 
     * @param node the node to act as the root, which will be the literal root if left empty
     */
    min(node: BinaryTreeNode<T> = this.root): T {
        return this.drillInDirection(node, LEFT);
    }

    /**
     * Find the maximum value associated with the tree rooted at `node`
     * 
     * @param node the node to act as the root, which will be the literal root if left empty
     */
    max(node: BinaryTreeNode<T> = this.root): T {
        return this.drillInDirection(node, RIGHT);
    }

    predecessor(element: T): BinaryTreeNode<T> {
        return this.adjacentElement(element, LEFT, this.max);
    }

    successor(element: T): BinaryTreeNode<T> {
        return this.adjacentElement(element, RIGHT, this.min);
    }

    delete(element: T): boolean {
        let foundNode: BinaryTreeNode<T> = this.findNode(element, this.root);
        if(!foundNode) {
            return false;
        }

        let parentNode: BinaryTreeNode<T> = foundNode.parent;
        //case one -- node is a leaf node
        if(!foundNode.left && !foundNode.right) {
            if(parentNode.left === foundNode) {
                delete parentNode.left;
            }
            else {
                delete parentNode.right;
            }
        }
        //case two -- node has one child
        else if(xor(foundNode.left, foundNode.right)) {
            let newNode: BinaryTreeNode<T> = foundNode.left ? foundNode.left : foundNode.right;
            newNode.parent = parentNode;
            if(parentNode) {
                if(parentNode.left === foundNode) {
                    parentNode.left = newNode;
                }
                else {
                    parentNode.right = newNode;
                }
            }
        }

        //case three -- node has two children
        else {
            let successorNode: BinaryTreeNode<T> = this.successor(foundNode.key);
            successorNode.parent.left = successorNode.right;
            
            successorNode.right = foundNode.right;
            successorNode.left = foundNode.left;

            successorNode.left.parent = successorNode;
            successorNode.parent = parentNode;
            if(parentNode.left === foundNode) {
                parentNode.left = successorNode;
            }
            else {
                parentNode.right = successorNode;
            }            
        }

        return true;
    }

    private adjacentElement(element: T, direction: string, fn: Function): BinaryTreeNode<T> {
        let foundNode: BinaryTreeNode<T> = this.findNode(element, this.root);
        if (!foundNode) {
            return null;
        }
        if (foundNode[direction]) {
            return this.findNode(fn.apply(this, [foundNode[direction]]), foundNode[direction]);
        }
        let parentNode: BinaryTreeNode<T> = foundNode.parent;
        while (parentNode && foundNode === parentNode[direction]) {
            foundNode = parentNode;
            parentNode = parentNode.parent;
        }
        return parentNode ? parentNode : null;
    }

    private drillInDirection(node: BinaryTreeNode<T>, direction: string): T {
        let currNode: BinaryTreeNode<T> = node;
        while (currNode && currNode[direction]) {
            currNode = currNode[direction];
        }
        if (!currNode) {
            return null;
        }
        else {
            return currNode.key;
        }
    }

    private inOrderTraversalWithArray(elements: T[], node: BinaryTreeNode<T>) {
        if (node) {
            this.inOrderTraversalWithArray(elements, node.left);
            elements.push(node.key);
            this.inOrderTraversalWithArray(elements, node.right);
        }
    }

    private findNode(element: T, node: BinaryTreeNode<T>): BinaryTreeNode<T> {
        if (!node) {
            
            return null;
        }
        if (node.key === element) {
            return node;
        }
        if (element < node.key) {
            return this.findNode(element, node.left);
        }
        else {
            return this.findNode(element, node.right);
        }
    }

}

class BinaryTreeNode<T>{

    public left: BinaryTreeNode<T>;
    public right: BinaryTreeNode<T>;
    public parent: BinaryTreeNode<T>;

    constructor(public key: T) { }

}