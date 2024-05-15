class Node {
    constructor(prev = null, next = null, val = null){
        this.prev = prev;
        this.next = next;
        this.val = val;
    }
}

export class LinkedList {
    constructor() {
        this.last = new Node();
        this.first = new Node(null, this.last);
        this.last.prev = this.first;
    }

    push(val) {
        let newNode = new Node(this.last.prev, this.last, val);
        this.last.prev.next = newNode;
        this.last.prev = newNode;
    }

    pop() {
        const val = this.last.prev.val;
        this.last.prev.prev.next = this.last;
        this.last.prev = this.last.prev.prev;
        return val;
    }

    unshift(val){
        let newNode = new Node(this.first, this.first.next, val);
        this.first.next.prev = newNode;
        this.first.next = newNode;
    }

    shift() {
        const val = this.first.next.val;
        this.first.next.next.prev = this.first;
        this.first.next = this.first.next.next;
        return val;
    }

    delete(val) {
        let node = this.first;
        while (node.next !== null) {
            if (node.val === val){
                node.next.prev = node.prev;
                node.prev.next = node.next;
                break;
            }
            node = node.next;
        }
    }

    count() {
        let node = this.first;
        let count = 0;
        while(node.next !== this.last){
            count++;
            node = node.next;
        }
        return count;
    }
}