class Rabbit {
    // Attributes are not saved into the prototype
    constructor(type) {
        this.type = type;
    };

    // Methodes are saved into the prototype
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

// Shadowing occurs because when the method/attribute is not found 
// in the instance prototype. So it searches in the prototype pointer
// to the superclass prototype.
let whiteRabbit = new Rabbit("white");

console.log("First type is: ", whiteRabbit.type);

whiteRabbit.type = "black";
console.log("Then type is: ", whiteRabbit.type);

delete whiteRabbit.type;
console.log("Finally type is: ", whiteRabbit.type);