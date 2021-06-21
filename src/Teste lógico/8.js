/* 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]*/

const desafio8 = (nums) => {
  const newArray = [];
  const unionArray = nums.map(number => newArray.push(number));
  return unionArray;
}

console.log(desafio8([1, 2, [3], [4, 5],[6]]));
console.log(desafio8([1, 2, [3], [4, 5],[6],[1,2,6,4,5]]));

