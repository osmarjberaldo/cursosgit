//ativadade 1 Palindromo
//nesse exercio ele ve se string escrita de traz para frente e igual se nao retorna verdade ou falso
function verficaPalindromo(string){
if(!string) return "string invalida"; //nula ou vazia sai da função
//se ela existe
return string.split("").reverse().join("") === string; //slipt separa todas letra, reverse inverte posição, join junta de volta
}
console.log(verficaPalindromo("ovo"));


// solução 2
function verficaPalindromo2(string){
    if(!string) return "string invalida"; //nula ou vazia sai da função
    
    for(let i = 0; i < string.length / 2; i++ ){
        //faz verificação dentro bloco começando do 0
        if(string[i] !== string[string.length -1 - i]){
        return false;
        }
    }
    return true;
}
console.log(verficaPalindromo2("gato"));


//ativaidade 2 array 
//arrey pares
function substituirPares(array){
   if(!array) return -1; //se for null
   if(!array.length) return -1; // nao tem length

  for(let i = 0; i < array.length; i++){
      if(array[i] === 0){ // se ela nao for igual a zero
          console.log("Voce ja e zero");
      } else if (array[i] % 2 === 0){ // se ele nao for divisivel por 2
        console.log(`subistituindo ${array[i]} por 0...`); //para usar $ tem q usar acento
          array[i] = 0;
      }
  }
 return array;
}
let arr = [1,2,3,4,5,6,80,33,23,90];

console.log(substituirPares(arr));// ferficando e chamdno a funcao
