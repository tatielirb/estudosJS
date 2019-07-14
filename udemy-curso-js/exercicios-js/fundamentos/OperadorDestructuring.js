//video 42
//novo recuros de ES2015

const pessoa = {
  nome: 'ana',
  idade: 5,
  endereco: {
    loradouro: 'rua abc',
    numero:1000
  }
}
const { nome, idade} = pessoa
console.log(nome, idade)

const {nome:n, idade:i} = pessoa
console.log(n, i)

const {sobremenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: { loradouro, numero, cep} } = pessoa
console.log(loradouro, numero, cep)

//video 43
const [a] = [10]
console.log(a)

const [n1, n2, n3, n4, n5, n6 = 0 ] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

//video 44
function rand({ mim = 0, max = 1000}) {
  const valor = Math.random() + (max - min) + max
}

const obj = {max:50, mim:40}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({}))
console.log(rand()) //undefined cuidado

//video 45
function rand([mim = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}
console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())//undefined