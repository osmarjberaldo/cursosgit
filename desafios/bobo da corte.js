const c = parseInt(gets());//quantidade de candidatos 
var v = new Array(c);//recebera a quantidade de votos de cada candidatos

for (let i = 0; i < c; i++){//busca os dados de entrada
 v[i] = parseInt(gets());//registra o numero de candidatos na Array
}

let primeiroInscrito = true;//primeiroInscrito=rafael,  true para testar no final

const teste = Number(v.shift());//teste=votos do rafael


for(let i = 0; i < c ; i++) {//distribui os votos para os outros candidatos e faz o teste com rafael
 const bobo = Number(v[i]); // atribui os votos 

 if ( teste < bobo ) {//testa se o candidatos tem mais votos que rafael
   primeiroInscrito = false;
 }
};

print(primeiroInscrito ? "S" : "N");