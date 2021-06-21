/* 
10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]
*/

const desafio10 = (num1, num2)  => {
  const newArray = num1.filter(number => num2.includes(number));
  return newArray;
}

console.log(desafio10([6, 8], [8, 9]))
console.log(desafio10([4, 2], [4, 1]))
