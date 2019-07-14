//video 40
console.log(typeof console)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bala'
//obj1['nome'] = 'bola2'
console.log(obj1.nome0)


function Obj(nome) {
  this.nome = nome
  this.exec = function() {
    console.log('Exec...')
  }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
