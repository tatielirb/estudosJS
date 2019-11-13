//video 48
/*
  v e v -> v
  v e f -> f
  f e ? -> f
  v ou ? -> v
  f ou v -> v
  f ou f -> f
  v xor v -> f
  v xor f -> v
  f xor v -> v
  f xor f -> f
  !v -> f
  !f -> v
*/

 function compras(trabalho1, trabalho2) {
   const comprarSorverte = trabalho1 || trabalho2
   const comprarTv50 = trabalho1 && trabalho2
   //const comprarTv32 = !!(trabalho1 ^ trabalho2)bitwise xor
   const comprarTv32 = trabalho1 != trabalho2
   const manterSuadavel = !comprarSorverte //operador uniario
  
   return { comprarSorverte, comprarTv50, comprarTv32, manterSuadavel }

 }

 console.log(compras(true, true))
 console.log(compras(true, false))
 console.log(compras(false, true))
 console.log(compras(false, false))
