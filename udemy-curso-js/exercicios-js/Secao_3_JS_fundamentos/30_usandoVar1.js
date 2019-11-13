//video 30

{
  {
    {
      {
        var sera = 'sera??'
        console.log(sera)
      }
    }
  }
}
console.log(sera)


function teste() {
  var local = 123
  console.log(local)
}
teste()
console.log(local)

//var ou é em escopo blogal ou criar em escopo de função



//video 31

var numero = 1
{
  var numero = 2
  console.log('dentro= ', numero)
}
console.log('fora=', numero)



//video 32

var numero = 1
{
  let numero = 2
  console.log('dentro=', numero)
}
console.log('fora=', numero)
