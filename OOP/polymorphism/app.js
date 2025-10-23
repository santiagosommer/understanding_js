class Rabbit {
    constructor(type) {
        this.type = type;
    }
}
let whiteRabbit = new Rabbit("white");
console.log(String(whiteRabbit));

Rabbit.prototype.toString = function () {
    return `a ${this.type} rabbit`;
};
console.log(String(whiteRabbit));