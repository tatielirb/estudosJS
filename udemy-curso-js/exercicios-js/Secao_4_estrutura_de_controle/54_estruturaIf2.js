//video 54

function teste1(num) {
  if(num > 7)
    console.log(num)
    console.log('final')
}

teste1(6)
teste1(8)

//não use ; no final da definição do bloco if, não usar com as estruturas de cosntrole

function teste2(num) {
  if(num > 7); {
    console.log(num)
  }
}
teste2(6)
teste2(8)

function teste3(num) {
  if(num > 7)
    ;
  {
    console.log(num)
  }
}

teste3(6)
teste3(8)


