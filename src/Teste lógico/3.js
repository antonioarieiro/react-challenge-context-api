/* 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]*/
const desafio3 = (nums) => {
  var filtered = nums.filter((clearTypes) => {
    return clearTypes != null && clearTypes != '';
  });
  
  return(filtered);
}

console.log((desafio3([1,2,''])))
console.log(desafio3([1,2,3,'',5, 0]));
