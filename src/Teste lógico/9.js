/* 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

 */


const desafio9 = (num1, num2) => {
  const newArray = new Array(Math.ceil(num1.length / num2))
  .fill()
  .map(
    _ => num1.splice(0, num2)
  )

  return newArray;

}

console.log(desafio9([1, 2, 3, 4, 5], 2))
console.log(desafio9([1, 4, 9, 8, 3], 3))

