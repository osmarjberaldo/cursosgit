//vazendo jogos usando estruturas
var jogador1 = 0;
var jogador2 = 0;
var placar;

//if ternario condição em unica linha
jogador1 != -1 && jogador2 != -1 ? console.log('jogadores sao validos'):
console.log('jogadores inválidos');

//verificar
if(jogador1 > 0 && jogador2 == 0){
    console.log("jogador 1 marcou pointo!");
    placar = jogador1 > jogador2;

} else if(jogador2 > 0 && jogador1 == 0)
{
    console.log("jogador 2 marcou pointo!"); 
    placar = jogador2 > jogador1;
} else {
    console.log("nem um jogar marcou gol");
}

//switch
switch(placar){
    case placar = jogador1 > jogador2:
     console.log('jogador 1 ganhou');
     break; //nao deixar codigo em loop
     case placar = jogador2 > jogador1:
         console.log('jogador 2 ganhou');
         break;  
         
      default: //para caso nem caso seja atendido
      console.log('jogo empatado');   
}

//for repetição ate que uma condição seja feita
let array = ['valor1', 'valor2', 'valor3', 'valor4'];
let object = {
    propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'
}

//for exetura a instrução
for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}


//for in executa repetição aprtir da propriedade
for (let i in array){
    console.log(i);// transformou numero em streang
} 

//for in objeto
for (i in object){
    console.log(i);// pegou a propriedade
} 

//for of por declaração
for(i of array){
    console.log(i);// pegou a valor do status
}

//for of com obejct da problema mais pode ser usado
for(i of object.propriedade1){
    console.log(i); // so que ele jogar cada letra em uma linha
}

//while laço vai executar em quanto ter verdadeiro, se nao fica infinito
var a = 0;
while(a < 10){
    a++;
    console.log(a);
}

//do até que
do{
    a++;
    console.log(a);
}while(a < 10)