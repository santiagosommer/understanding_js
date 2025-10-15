# Simple Service Worker

A minimal example demonstrating how to use a Service Worker for caching static assets.

## How to run locally


### 1. Start a local server from the project root
```bash
npx lite-server
```

### 2. Domain
For security reasons, Service Workers only work under:
- `https://`
- `http://localhost`

So make sure you are running it locally (e.g. `http://localhost:3000`) or under HTTPS.


