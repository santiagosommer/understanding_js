# Animating

This code shows a custom animation.

## How to run locally
```bash
npx lite-server
```

## Explanation

requestAnimationFrame is used to schedule the function to be run before each repaint.

On each animate() execution, the image position is calculated incrementing the angle.

### Why increase the angle depending on the time and not in a fixed value?

Sometimes the browser performs heavy tasks that cause small delays between frames.  
If we increase the angle by a fixed value, the animation will appear to pause until the browser finishes those tasks.  
By calculating the new position based on the elapsed time, we compensate for the distance the image should have moved during those delays, keeping the motion smooth and consistent.

### Angle calculation

Each frame the image is supposed to move 0.001 rad (60FPS).

Time is in ms, so:

```bash
Δangle (rad) = Δtime (ms) × 0.001 (rad/ms)
```
0.001 is the angular speed, if the image gets a delay of 10ms, the next frame will show an angular increase of 0.01rad (would be equivalent to 10 frames).