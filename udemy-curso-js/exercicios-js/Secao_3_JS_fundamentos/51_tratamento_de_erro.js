//video 51

//console

window //global
this  //global
this === window

var a = "texto"
window.a
var a = 123

let b = 123
window.b

function f1() {return this = window}
f1()
window.f1()
this.f1()

let a = 3 
global.b = 123
this.c = 456
console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)