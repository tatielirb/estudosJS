//video80
// Closures é o escopo criado quando uam funcao é declarada
// esse escopo pemite a função acessar e manipula variaveis externas a funcao

// contexto lexico em ação!


const x = "Global"

function fora() {
  const x = "Local"
  function dentro() {
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao)