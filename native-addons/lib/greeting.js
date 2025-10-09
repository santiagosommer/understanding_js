// This contains 'exports', which is the return of the Init function in the cpp file
const addon = require('./../build/Release/greeting.node');

module.exports = addon;