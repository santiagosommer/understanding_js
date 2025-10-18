# Finding elements in the DOM
When looking for an element by its ID, only the `document` object has the `getElementById` method.

This is because IDs are unique in the document. To optimize the search, browsers implement a fast search data structure.

## How to run locally

### 1. Start a local server from the project root
```bash
npx lite-server
```

### 2. Check logs