/* 6) Implemente um método que retorne um array, sem valores duplicados.
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]*/

const desafio6 = (nums) => {
  const newArray = [];
  for (unique of nums) {
    if (newArray.indexOf(unique) === -1) {
      newArray.push(unique);
    }
  }
  return newArray;
}

console.log(desafio6([1,2,3,3,2,4,5,4,7,3]));
console.log(desafio6([1,2,2,2,3,4,4,4]));

