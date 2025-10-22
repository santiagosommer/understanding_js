# Dragging
This code shows how to expand a bar dragging with the mouse.

## How to run locally
```bash
npx lite-server
```

## Explanation
When the left mouse button is pressed over the bar, a `mousedown` event is triggered.
While the mouse is moved with the left button held down, the `moved()` function runs repeatedly.
It updates the bar's width incrementally based on how far the cursor has moved since the last event.
This stops when the mouse button is no longer pressed.
