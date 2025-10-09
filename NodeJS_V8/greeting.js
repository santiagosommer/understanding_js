// This contains 'exports', which is the return of the Init function
const addon = require('./build/Release/greeting');

console.log(addon.greeting());