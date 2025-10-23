class Rabbit {
    constructor(type) {
        this.type = type;
    };

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let whiteRabbit = new Rabbit("white");
let hungryRabbit = new Rabbit("hungry");
let blackRabbit = new Rabbit("black");

whiteRabbit.speak("Oh my fur and whiskers");
hungryRabbit.speak("Got any carrots?");
blackRabbit.speak("I am fear and darkness");