// Imports
import { heavyComputation } from './utils.js';
import compute from './worker_compute.js';

// Launch a worker to perform a heavy computation.
const testCompute = async (n) => {
    let result = await compute(n);
    console.log(result)
};

// Count computation time in a single thread
console.time('countComputation');
heavyComputation(1000);
heavyComputation(500);
heavyComputation(3000);
heavyComputation(2000);
console.timeEnd('countComputation');

// Count computation time in 4 different threads
console.time('countWorkers');
await Promise.all([
    testCompute(1000),
    testCompute(500),
    testCompute(3000),
    testCompute(2000),
]);
console.timeEnd('countWorkers');