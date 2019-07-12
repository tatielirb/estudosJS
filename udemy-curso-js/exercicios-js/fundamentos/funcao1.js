//video 27
console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

//video 28

//função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
// imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6)
imprimirSoma()

//função com retorno
function soma(a, b = 1) {
  return a + b
}

console.log(soma(2, 3))


//video 29

//armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma função arrow em uma variavel

const soma = (a, b) => {
  return a + b
}

console.log(2, 3)

//retorno implicito

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('legal')