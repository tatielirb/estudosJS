//video 70
//Função arraow 01

let dobro = function (a) {
  return 2 * a
}

// sempre é uma função anonima, deve aramazenar em uma variavel
dobro = (a) => {
  return 2 * a
}


dobro = (a) => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function () {
  return 'ola'
}

ola = () => 'ola'

oal = _ => 'ola' // possui im param

console.log(ola())