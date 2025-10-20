# Layout
This code shows the time difference between a naive function, which triggers a reflow on every node insertion, and a clever function, which achieves the same result with a single insertion.

## How to run locally
```bash
npx lite-server
```

## Explanation

### Naive function
This function appends a text node for each letter until filling 2000px. 
For each node, we access the `offsetWidth` property, which causes a reflow on every iteration.

### Clever function
This function only appends a text node one time, then calculates the amount of 'X' needed to fill the 2000px and update the value.
This only causes one reflow when calculating the total of 'X', making this extremely efficient.