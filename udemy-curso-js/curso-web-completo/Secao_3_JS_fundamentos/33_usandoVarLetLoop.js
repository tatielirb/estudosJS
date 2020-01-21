//video 33 com var

for (var a = 0; a < 10; a++) {
  console.log(a)
}

console.log('a =', a)

//video 34 com let

for (let i = 0; i < 10; i++) {
  console.log(i)
}

console.log('i =', i)

//video 35 
//usando var em loop 
const funcs = []

for (var i = 0; i < 10; i++ ) {
  funcs.push(function() {
    console.log(i)
  })
}
funcs[2]()
funcs[8]()


//video 36 
//usando lrt em loop 

const funcs1 = []

for (let b = 0; b < 10; b++ ) {
  funcs1.push(function() {
    console.log(b)
  })
}
funcs1[2]()
funcs1[8]()