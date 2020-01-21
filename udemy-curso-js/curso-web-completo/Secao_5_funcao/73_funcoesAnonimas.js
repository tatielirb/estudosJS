//video 73
//Função anonimas
// funcao sem nome = funcao anonima


const soma = function (x, y) {
  return x + y
}

const imprimirResultado = function (a, b, operaca = soma) {
  console.log(operacao(a,b))
}

imprimirResultado(3, 4)
imprimirResultado(2, 4, soma)
imprimirResultado(3,4, function (x,y) {
  return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
  falar: function () {
    console.log('opa')
  }
}

pessoa.falar()