//95 heranca 02

// cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso
const avo = { attr1: 'A'}
const pai =  { __proto__: avo, attr2: 'B', attr3: '3'}
const filho = { __proto__: pai, attr3: 'c'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro = {
  velAtual: 0,
  VelMax: 200,
  aceleraMais(delta) {
    if (this.velAtual + delta <= this.VelMax) {
      this.velAtual = this.VelMax
    } else {
      this.velAtual = this.VelMax
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.VelMax}km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  VelMax:324 //shadowing
}

const volvo = {
  modelo:'v40',
  status() {
    return `${this.modelo}: ${super.status()}`
  } 
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())