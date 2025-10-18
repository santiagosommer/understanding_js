# Exploring DOM tree
The DOM (Document Object Model) represents an HTML document as a tree of nodes.  
Each element, text, or comment in the HTML becomes a node in this tree.

This example shows how to recursively traverse the DOM to check whether a specific string appears in any text node.

While this approach isn’t the most efficient for finding elements (compared to methods like `querySelectorAll`), it helps understand how DOM traversal works under the hood.

## How to run locally

### 1. Start a local server from the project root
```bash
npx lite-server
```

### 2. Check logs