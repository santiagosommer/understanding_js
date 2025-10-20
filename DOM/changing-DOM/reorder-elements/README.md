# Reordering elements in the DOM tree

## How to run locally
```bash
npx lite-server
```

## Explanation
We define three 'p' tags and retrieve the list with the `getElementsByTagName()` method.
Then we take the last node element of the p tags and insert it first with `insertBefore` method.

Because DOM elements are unique objects, moving them to a new position automatically removes them from their previous location in the document.