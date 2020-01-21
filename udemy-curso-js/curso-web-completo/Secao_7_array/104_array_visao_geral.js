//104 array visão geral
// array em js é um objeto, organizado os indices, é uma estrutura heterogenia, dinamico

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('bia', 'carlos', 'ana')
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'paulo'
//added alements in array
aprovados.push('abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
//reordenou o array
aprovados.sort()
console.log(aprovados)

delete aprovado[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 2)
// aprovados.splice(1, 2, 'Elemento1','Elemento2')
console.log(aprovados)

