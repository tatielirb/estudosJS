//video 25

const prod1 = {}
prod1.nome = 'celular ultra mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
  nome: 'camisa polo',
  preco: 79.90
  // obj: {
  //   blabla: 1,
  //   obj:{
  //     blabla: 2
  //   }
  // }
}

console.log(prod2)


//video 32

console.log(typeof Object)

console.log(typeof new Object)

const cliente = function() {}
console.log(typeof cliente)
console.log(typeof new cliente)

class Produto {} //ES 2015(E26)
console.log(typeof Produto)
console.log(typeof new Produto)

