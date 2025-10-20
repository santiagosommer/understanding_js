# Tag sustitution

## How to run locally
```bash
npx lite-server
```

## Explanation
We iterate through the collection of nodes containing `<img>` tags.  
Then, from end to start, we replace each `<img>` tag with a `<p>` tag containing the image's `alt` text.

It's necessary to iterate from end to start because the array-like
collection of nodes is live: it contains references that are updated
automatically when the DOM changes.  

As an alternative, you can use `Array.from()` to create a static array
so that changes to the DOM do not affect the iteration.