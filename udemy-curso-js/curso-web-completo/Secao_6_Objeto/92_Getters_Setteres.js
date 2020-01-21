//92_Getters/Setteres.js

const sequemcia = {
  _valor: 1, // convenção
  get valor() {return this._valor++},
  set valor(valor) {
    if(valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequemcia.valor, sequemcia.valor)
sequemcia.valor = 900
console.log(sequemcia.valor, sequemcia.valor)