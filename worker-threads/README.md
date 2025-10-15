# Worker Threads
A quick overview of the Worker Threads implementation in Node.js

## How to run locally

### From root
```bash
node app.js
```

## Walkthrough Explanation

### Worker process
1. Calls compute
This creates a promise that will be resolved after the worker finishes the task.

2. When finishing task
It sends a message that a registered listener receives.

3. Node's runtime
When the Node's runtime receives the message, it adds the registered handler callback(from `worker.on('message', handler)`) to the event queue.

4. Event queue
Then, when the event queue is processed, the handler callback is executed.

5. Hanlder execution
When the promise is resolved, its callback is added to the microtask queue.

6. Finally
When the call stack is empty, it executes the callback and retrieves the data processed by the worker.

## Worker Pools
In practice, creating a Worker for each task consumes a lot of resources, so Worker Pools are used instead.  
You define a fixed set of Workers and distribute the workload among them, reusing the Workers for multiple tasks.