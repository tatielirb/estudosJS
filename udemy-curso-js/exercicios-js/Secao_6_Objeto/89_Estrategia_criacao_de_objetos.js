//89_Estrategia_criacao_de_objetos.js

//#1day

//usando a notção literal
const obj1 = {}
console.log(obj1)

// object em JS 
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// função construtoras
function Produto(nome, preco, desc) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//função factory

function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas, 
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// object.crete

const filha  = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um Jason"}')
console.log(fromJSON.info)


