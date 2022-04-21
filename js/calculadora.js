////crinado uma calculadora
function calculadora(){
    const operacao = prompt('Escolha uma operação:\n 1 - soma(+)\n 2 - subtração (-)');
   

//definindo variavel
let n1 = parseInt(prompt('Insira o primeiro valor'));
let n2 = parseInt(prompt('insira o segundo valor'));
let resultado;

//funcao soma
function soma(){
   resultado = n1 + n2;
   alert('${n1} + ${n2} = ${resultado}') 
}
//ferificando operação
if(operacao == 1){
  soma();
} else if (operacao == 2){
    subtracao();
}
//continua todas operações
}


calculadora();