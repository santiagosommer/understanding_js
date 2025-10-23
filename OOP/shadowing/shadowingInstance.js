let proto = { greet() { console.log("Hello from proto") } };

let instance = Object.create(proto);

// Before shadowing
instance.greet();
console.log("instance.greet === proto.greet", instance.greet === proto.greet);

let shadowFunction = function () { console.log("Shadowing done"); };
instance.greet = shadowFunction;

// After shadowing
instance.greet();
console.log("instance.greet === proto.greet", instance.greet === proto.greet);
console.log("instance.greet === shadowFunction: ", instance.greet === shadowFunction)

// Removing shadowing
delete instance.greet;

instance.greet();
console.log("instance.greet === proto.greet", instance.greet === proto.greet);