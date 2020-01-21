//105 array metodos importantes

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//remove o ultimo elemento da lista
pilotos.pop() //massa quebrou o carro
console.log(pilotos)

// adiciona elemento
pilotos.push('Verstappen')
console.log(pilotos)

//remove o primeiro da lista
pilotos.shift()
console.log(pilotos)

//adiciona o elemento na primeira posisção
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos 
//adiciona
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)
//remove
pilotos.splice(3, 1)
console.log(pilotos)


//gera um novo array , pega uma parte do array
const algunsPilotos1 = pilotos.slice(2) 
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
