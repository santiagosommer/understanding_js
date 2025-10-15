import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from 'node:worker_threads';
import { threadId } from 'worker_threads';


if (!isMainThread) {
  console.log(`Worker ${threadId} started`);
  const { heavyComputation } = await import('./utils.js');
  const computationNumber = workerData;
  parentPort.postMessage(heavyComputation(computationNumber));
}

export default function compute(n) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL(import.meta.url), {
      workerData: n,
    });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};