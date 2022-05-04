// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

let totalDeDias = parseInt(gets(400));

let qtdAnos, qtdMeses;
let ano = 365;
let mes = 30;

qtdAnos = parseInt( totalDeDias/ano         );
totalDeDias= totalDeDias % ano      ;

qtdMeses= parseInt( totalDeDias/mes            );
totalDeDias=   totalDeDias % mes                        ;

let resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
totalDeDias + " dia(s)");

print(resultado);