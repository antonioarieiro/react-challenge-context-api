/* 1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a'] */

const desafio1 = (num,char) => {
  var result = [];
  for ( var a = 0; a < num; a++ ) {
    result.push(char);
  }
  return(result);
}

desafio1(3,'a');
