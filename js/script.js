//boleanos  verdadeiro ou falso
var vouF = false;
console.log(vouF);

//numero
var numeroQaulquer = 1;
console.log(typeof(numeroQaulquer)); //tipo da variavel

//string
var nome = 'valdirene';
console.log(nome);

// var reseve dados
//let recebe variavel quase igual var
// cont ja constante não pode ser nullo e nao pode ser alterada
const constante = 'diana';
console.log(constante);

//escopo global
var escopoGlobal = 'globo';
console.log(escopoGlobal);

function escopolocal(){
    let escopoGlobalInterno = 'local';
    console.log(escopoGlobalInterno);
}
escopolocal(); //chamando funcao;


//meno ou igual
var menoOuIgual = 5 <= 2;
console.log(menoOuIgual);

// && se dois for igual e verdadeiro
var e = true && true;
console.log(e);

// || se tiver convert 1 true tudo para true
var ou = true || false;
console.log(ou);

// ! iverte o true para falso ou contrario
var nao = !true;
console.log(nao);