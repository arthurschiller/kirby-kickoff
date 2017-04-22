// ## some hello world sample code that imports a module
var sayHello = require('./someModule')

var greeting = document.querySelector('.greeting')

if (greeting !== null) {
	sayHello('World', greeting)
}