//91 notacao literal
//#day1

const a = 1
const b = 2
const c = 3

//version old
const obj1 = {a:a, b:b, c:c}
//version new
const obj2 = {a, b, c}
console.log(obj3)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
  //version old
  funcao1: function() {
    //...
    
  },
  //version new
  funcao2() {
    //..
  }
}

console.log(obj5)

