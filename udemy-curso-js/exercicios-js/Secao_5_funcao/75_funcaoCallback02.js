//video 75 01
//função callback


const notas = [7.7, 6.5, 8.9, 5.2, 3.6,7.1,9.0]

let notasBaixas1 = []
for(let i in notas) {
  if(notas[i] < 7) {
    notasBaixas1.push(notas[1])
  }
}

console.log(notasBaixas1)

//com callback

notasBaixas2 = notas.filter(function (nota){
  return nota < 7
})

console.log(notasBaixas2)


// com callback and arrow function

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

