// Strict mode this
function strictThis() {
    "use strict"; // Can be used globally
    console.log("With strict enabled: ", this);
}

// Function this
function functionThis() {
    console.log("This is global inside functions. Is equal to globalThis?: ", this == globalThis);
}

// Object this
const obj = {
    val: 10,
    show() { console.log("This points to the object: ", this) }
};

// Closure
function closure(x) {
    let y = 2;
    function innerFunction(a) {
        console.log("This is still globalThis: ", this == globalThis);
        return x + y;
    }
    return innerFunction;
}

// Global this
console.log("globalThis points to the global object", globalThis)

strictThis();
functionThis();

let thisInClosure = closure(2);

console.log(thisInClosure(2));