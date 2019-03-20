
class ListNode {
    constructor(value) {
        this.nextNode = undefined;
        this.value = value;
    }
}

class LinkedList {

    // Array is used to implement stack 
    constructor() 
    { 
        this.head = undefined;
        this.count = 0; // keep track of count
    } 
  
    // Functions to be implemented 

    insert(value) {
        // insert at beginning of list
        var newNode = new ListNode(value);
        newNode.nextNode = this.head; // point our new node at the current head
        this.head = newNode; // update head to point at our new node

        // increment count
        this.count++;
    }

    remove(value) {
        if (this.size() === 0) { // if the list is empty
            return false;
        } else if (this.head.value === value) { // if our value is first in the list
            this.head = this.head.nextNode;
            this.count--;
            return true;
        } else { // if our value isn't first in the list, look at all of the other nodes
            let previousNode = this.head;
            while (previousNode.nextNode && previousNode.nextNode.value !== value) {
                previousNode = previousNode.nextNode;
            }
            if (previousNode.nextNode && previousNode.nextNode.value === value) {
                previousNode.nextNode = previousNode.nextNode.nextNode;
                this.count--;
                return true;
            }
        }
        return false;
    }

    contains(value) {
        // find value and return true or false
        let currentNode = this.head;
        while (currentNode !== undefined) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    size() {
        return this.count;
    }

    toString() {
        // return list as a comma-delimited string of all values
        let output = "";
        let currentNode = this.head;
        while (currentNode !== undefined) {
            output += JSON.stringify(currentNode) + "\n";
            currentNode = currentNode.nextNode;
        }
        return output;
    }
}

module.exports.LinkedList = LinkedList;
