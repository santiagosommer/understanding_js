class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak() { console.log("Hello from parent!") }
}

class MiniRabbit extends Rabbit {
    constructor(type) {
        super(type);
    }
    // speak() { console.log("Hello from child!") }
}


let miniRabbit = new MiniRabbit("mini");

// 2 ways to see shadowing here

// 1
miniRabbit.speak = function () { console.log("Hello from child!") }
miniRabbit.speak();
delete miniRabbit.speak;
miniRabbit.speak();

// 2
MiniRabbit.prototype.speak = function () { console.log("Hello from child!") }
miniRabbit.speak();
delete MiniRabbit.prototype.speak;
miniRabbit.speak();