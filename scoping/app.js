// If I run this script with node, this is treated as a module,
// so var a will be undefined
var a = "I belong to the global execution context";
let b = "I won't be displayed!";
const c = "I won't be displayed either!";

console.log(
    "var a: ", globalThis.a,
    "let b: ", globalThis.b, "const c", globalThis.c,
    "Variables declared with const or let don't contaminate the global object"
);