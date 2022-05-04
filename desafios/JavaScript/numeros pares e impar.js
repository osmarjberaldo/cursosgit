// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

/**
 * Minha versão de gets() e print() para testes
 */

let totalItems = parseInt(gets(12));
let pares = [];
let impares = [];

for (let i = 0; i < totalItems ; i++) {
    let number = parseInt(gets(10,4,32,34,543,3456,654,567,87,6789,98));
    if (number%2 === 0){
        pares.push(number);
    }
    else {
        impares.push(number);
    }
}
pares.sort((a, b) =>  a - b);

impares.sort((a, b) =>  b - a);

for(let i = 0; i < pares.length;i++){
  print(pares[i])
}
for(let i = 0; i < impares.length;i++){
  print(impares[i])
}