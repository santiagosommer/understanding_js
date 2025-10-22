# Event flow
This code demonstrates event propagation including capture, target, and bubbling phases.

## How to run locally
```bash
npx lite-server
```

## Explanation

Event flow has 3 phases
1. **Capture phase** <br> This is when the event is detected and travels down the DOM from the root(window) to the target element.

2. **Target phase** <br> The event reaches the target element.

3. **Bubbling phase** <br> This is when comes all the way back to the root (window).

Each time an event is triggered, the browser creates an event object, that descends from window to the target and back to top.
**Only listeners registered with the same event type are triggered**

`event.stopPropagation()` can be used to stop the event from propagating to ancestor elements, but it does not stop other listeners on the same element from running.

`event.stopImmediatePropagation()` stops the execution of any other listeners on the same element and also prevents the event from propagating to ancestor elements. 
Unlike `stopPropagation()`, it affects other listeners on the same element.