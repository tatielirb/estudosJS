//video 71
//Função arraow 02

function Pessoa() {
  this.idade = 0

  setInternal(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}

new Pessoa