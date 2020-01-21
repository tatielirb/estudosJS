//96 heranca 03
const mae  = { nome: 'Joana', corCabelo: 'preto'}

const filha1 = Object.create(mae)
filha1.nome = 'ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(mae, {
  nome: {value: 'bia', whitrable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
  filha2.hasOwnProperty(key) ?
  console.log(key) : console.log(`Por herança ${key}`)
}
