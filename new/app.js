function Person(name) {
    this.name = name;
}

let person = Person('juan');
console.log("Name assigned to global object ", globalThis.name)
console.log("person remains undefined: ", person)

function NewPerson(name) {
    this.newName = name;
}

let newPerson = new NewPerson("juan");
console.log("When using new, in global object: ", globalThis.newName)
console.log("And inside the newPerson object ", newPerson)