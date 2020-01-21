//video79
// contexto lexico

const valor = "Global"
function minhaFuncao() {
  console.log(valor)
}

function exex() {
  const valor = "local"
  minhaFuncao()
}

exec()