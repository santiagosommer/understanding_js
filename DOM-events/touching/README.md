# Touching
When touch-screens appeared, a different approach to conventional clicking was needed.
For touches, we have new events, and one par of coordinates for each touch.

## How to run locally
```bash
npx lite-start
```

## Explanation
For each touch, a red circle is drawn by creating a `dot` element at the touch position.  
When the finger is pressed or moved, all previous dots are deleted and new ones are created at the updated positions.  
After releasing the touch, the `touches` array becomes empty, so all dots are removed.
