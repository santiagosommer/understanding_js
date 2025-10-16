// 1
let resolveP;
const p = new Promise((res) => {
    resolveP = res;
});

// 2
setTimeout(() => {
    // 18-19
    p.then(() => console.log('4')); // 20
}, 0);

// 3
p.then(() => console.log('1')); // 12

// 4
async function test() {
    // 7
    console.log('Start test')
    // 8
    await p;
    // 14-15
    console.log('End test')
    return p;
};

// 5
p.then(() => console.log('2')); // 13
// 6
let asyncReturn = test();

// 9
// 10
p.then(() => console.log('3')); // 17

// 11
resolveP();

function basicReturn() {
    return Promise.resolve(p);
}

// Async returning type
console.log(p === asyncReturn); // False
console.log(p === basicReturn()); // True