/*Implemente um método que retorne um array, sem os itens passados por parâmetro 
depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2] */

const desafio5 = (num1, num2, num3) => {
  const finalRetur = num1.filter((newArray) => newArray !== num2 && newArray !== num3);
  return finalRetur
}

console.log(desafio5([5,4,3,2,5],5,3))
console.log(desafio5([1,2,3,4,5],1))
console.log(desafio5([1,'a'],1))
