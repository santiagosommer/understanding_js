class List {
    constructor(value, rest) {
        this.value = value;
        this.rest = rest;
    }

    // Creates a linked list from an array
    static fromArray(array) {
        let result = null;

        for (let i = array.length - 1; i >= 0; i--) {
            result = new this(array[i], result);
        };
        return result
    }
}

class ListIterator {
    constructor(list) {
        this.list = list;
    }

    // Returns the next element in the list for iteration
    next() {
        if (this.list == null) {
            return { done: true };
        }
        let value = this.list.value;
        this.list = this.list.rest;
        return { "value": value, done: false }
    }
}

// Enables iteration over the list with for...of
List.prototype[Symbol.iterator] = function () {
    return new ListIterator(this);
}

// Final result
let list = List.fromArray([0, 1, 2]);
for (let element of list) {
    console.log(element);
}