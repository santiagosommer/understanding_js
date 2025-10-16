# Understading async/await

## How to run locally

### From root
```bash
node app.js
```

## Walkthrough Explanation
### Step by step
1. We create a promise
2. SetTimeout is added to the timers queue
3. We register inside an internal list callback 1
4. We define test() as an async function
5. We register callback 2
6. We call our test function
7. It logs `Start test`
8. Await creates inside the same internal list of .then() callbacks an **equivalent to .then()** process to continue the test function iteration
9. Continue with the remaining call stack functions
10. Call back 3 registered
11. Promise resolved
12. Callback 1 logs
13. Callback 2 logs
14. Async function continues
15. Logs `End test`
16. Returns p
17. Callback 3 logs
18. Microtask is empty so it executes the timers
19. Call back 4 registered
20. Promise is resolved so callback 4 logs

### Async returning type
Promise.resolve returns the same promise instance, whereas async functions create a new promise instance that wraps the original one.