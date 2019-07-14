//video 39
//par chave valor

const saudacao = 'Opa' //contexto léxico 1

function exec() {
  const saudacao = 'falaa' //contexto léxico 2
  return saudacao
}

//objeto são frupos aninhados de pares nome/valor
const cliente = {
  none: 'tatieli',
  idade: 31,
  peso:60,
  enderecao: {
    logradouro: 'Rua muito legal',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)