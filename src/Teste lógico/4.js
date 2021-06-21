/* 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}*/

const desafio4 = (nums,number) => {
  var newArray = [];
  newArray.push(nums);
  newArray.push(number);
  var arrayObj = Object.fromEntries(newArray);

  return(arrayObj)
}

console.log(desafio4(["c",2], ["d",4]))
console.log(desafio4(["a",1], ["b",2]))
