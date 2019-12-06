//video82
// Funcao Factory 02


function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    deconto: 0.1
  }
}

console.log(criarProduto('notebook', 299.49))
console.log(criarProduto('notebook', 200.00))