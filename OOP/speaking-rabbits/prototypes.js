let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let blackRabbit = Object.create(protoRabbit);
let whiteRabbit = Object.create(protoRabbit);
let hungryRabbit = Object.create(protoRabbit);

whiteRabbit.type = "white";
hungryRabbit.type = "hungry";
blackRabbit.type = "black";

whiteRabbit.speak("Oh my fur and whiskers");
hungryRabbit.speak("Got any carrots?");
blackRabbit.speak("I am fear and darkness")