//  1 - Dado dois arrays de inteiros não vazios, determine se os valores do segundo array estão na mesma ordem no primeiro array.
// ex: [5, 1, 22, 25, 6, -1, 8, 10] e [1, 6, -1, 10] -> true
function isSubsequent(values: Array<Number>, sequence: Array<Number>): Boolean {
  //Verificando se algum dos arrays é vazio
  if (values.length === 0 || sequence.length === 0) {
    return false;
  }

  //Verificando se o tamanho do array de comparação é maior que o array a ser comparado
  if (values.length < sequence.length) {
    return false;
  }

  //Instanciando contador para o array de comparação
  var contador = 0;

  //Percorrendo o array a ser comparado
  values.forEach((value) => {
    //Verificando se o valor do array a ser comparado é igual ao valor do array de comparação
    if (value == sequence[contador]) {
      //Incrementando o contador caso ache o valor igual
      contador++;
    }
  });

  //Se o contador for igual ao tamanho do array de comparação, isso quer dizer que todos os valores do array de comparação estão no array comparado
  if (contador == sequence.length) {
    return true;
  } else {
    return false;
  }
}
console.log(
  "=========================================================================================================================="
);

var array1 = [5, 1, 22, 25, 6, -1, 8, 10];
var array2 = [1, 6, -1, 10];
console.log(
  "Resultado do teste 1 para os arrays [5, 1, 22, 25, 6, -1, 8, 10] [1, 6, -1, 10]: " +
    isSubsequent(array1, array2)
);

var array1 = [1, 2, 3, 9, 8, 7, 5, 6];
var array2 = [1, 3, 8, 10];
console.log(
  "Resultado do teste 1 para os arrays [1, 2, 3, 9, 8, 7, 5, 6] [1, 3, 8, 10]: " +
    isSubsequent(array1, array2)
);

console.log(
  "=========================================================================================================================="
);

//  2 - Dado um array de strings não vazio, remova os dados duplicados em sequencia.
// ex: ["g","g","y","c","c","c","q","c","y","y"] -> ["g","y","c","q","y"]
function removeDuplicates(values: Array<String>): Array<String> {
  //Usando filter para abstrair um novo array
  return values.filter(function (atual, index, array) {
    //Verificando se o valor atual é igual ao proximo valor
    //Se sim, não adiciona o valor atual no array
    return atual === array[index + 1] ? false : true;
  });
}

var duplicatedArray = ["g", "g", "y", "c", "c", "c", "q", "c", "y", "y"];
console.log(
  "Resultado do teste 2 para o array ['g','g','y','c','c','c','q','c','y','y']: " +
    removeDuplicates(duplicatedArray)
);

var duplicatedArray = ["o", "o", "o", "l", "l", "l", "á", "á", "á", "a"];
console.log(
  "Resultado do teste 2 para o array ['o', 'o', 'o', 'l', 'l', 'l', 'á', 'á', 'á', 'a']: " +
    removeDuplicates(duplicatedArray)
);

console.log(
  "=========================================================================================================================="
);

//  3 - Dado um array de strings não vazio, retorne um array de booleans indicando se cada string é um palíndromo.
// ex: ["arara", "jabuticaba", "asa", "caminhao"] -> [true, false, true, false]
function isPalindrome(values: Array<String>): Array<Boolean> {
  //Usando o map para retornar um novo array
  return values.map((value) => {
    //Usando o split para separar os caracteres do array
    //Usando o reverse para inverter os caracteres do array
    //Usando o join para juntar os caracteres do array
    //Comparando o valor do array com o valor do array invertido
    return value === value.split("").reverse().join("") ? true : false;
  });
}

var palindromeArray = ["arara", "jabuticaba", "asa", "caminhao"];
console.log(
  "Resultado do teste 3 para o array ['arara', 'jabuticaba', 'asa', 'caminhao']: " +
    isPalindrome(palindromeArray)
);
var palindromeArray = ["osso", "ovo", "asa", "hannah"];
console.log(
  "Resultado do teste 3 para o array ['osso', 'ovo', 'asa', 'hannah']: " +
    isPalindrome(palindromeArray)
);

console.log(
  "=========================================================================================================================="
);
