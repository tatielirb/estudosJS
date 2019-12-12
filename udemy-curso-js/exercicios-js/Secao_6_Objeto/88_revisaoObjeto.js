//88 revisão

// coleção dinamica de pares chaves/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 988888,
  proprietario: {
    nome: 'ola',
    idade:56,
    endereço: {
      logradoro: 'rua tal',
      numero:123
    }
  },
  condutores:[{
    nome: 'junior',
    idade:19
  },{
    nome:'ana',
    idade:41
  }],
  calularValorSeguro: function() {

  }
}

carro.proprietario.endereço.numero = 1000
console.log(carro)

delete carro.condutores
delete carro.calularValorSeguro
delete carro.proprietario.endereço

console.log(carro.condutores)
console.log(carro.condutores.length)