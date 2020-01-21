//video 72
//Função arraow 03

let compraComThis = function (param) {
  console.log(this === param)
}

compraComThis(global)

const obj = {}
compraComThis =compraComThis.bind(obj)
compraComThis(global)
compraComThis(obj)

//arrow

let compraComThisArrow = param => console.log(this === param)
compraComThisArrow(global)
compraComThisArrow(module.exports)

compraComThisArrow = compraComThisArrow.bind(obj)
compraComThisArrow(obj)
compraComThisArrow(modile.exports)