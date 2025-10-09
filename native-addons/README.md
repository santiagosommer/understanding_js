# Understanding native modules in Node.js

## Dependencies
- npm install node-addon-api

## To run

### Compile (from root)
node-gyp configure
node-gyp build

### Run test (Verify it works)
node test/test_greeting.js

## Explanation

### binding.gyp
- Contains the needed data for compiling

### src/greeting.cpp
- Defines the native C++ function (Greeting) and the Init function

### lib/greeting.js
- Requires the compiled native module and exposes it for use in the project