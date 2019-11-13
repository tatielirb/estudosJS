//video 26

const a = {name: 'teste'}
const b = a


let valor //não inicializada
console.log(valor)

valor = null
console.log(valor)

// console.log(valor.toString())

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar tribuir underfined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)