//video 59

function getInteiroAletorioEntre(min, max) {
  const valor = Math.random() * (max - min)  + min
  return Math.floor(valor)
}

let opcao = 0

do {
  opcao = getInteiroAletorioEntre(-1, 10)
  console.log(`opção escolhida foi`, opcao)
}while (opcao != -1) 

console.log('até a proxima')