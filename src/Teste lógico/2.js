/*2) Implemente um método que inverta um array, não utilize métodos nativos do array.
Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1] */

const desafio2 = (array) => {
  const newArray = [];
//  console.log(array.length)
  for( var a = array.length -1 ; a >= 0; a-- ) {
    newArray.push(array[a]);
  }
  return(newArray)
}

console.log(desafio2([1,2,3,4]))
