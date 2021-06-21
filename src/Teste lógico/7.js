/* 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true */

const desafio7 = (num1, num2) => {
  const validarArrays = num1.length == num2.length && num1.every(function(value, index) {
    return value === num2[index];
  })
  return validarArrays;
}

console.log(desafio7([1,2,3,4],[1,2,3,4]))
console.log(desafio7([1,4343],[1,4343]))
