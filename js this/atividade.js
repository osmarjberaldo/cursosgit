const aluno = [
  {
      nome: 'Joao',
      nota: 5,
      turma, '1B',
  },
  {
    nome: 'Pedro',
    nota: 9,
    turma, '2B',
},
{
    nome: 'JMathes',
    nota: 10,
    turma, '6B',
},

];

function alunosAprovados(arr, media){
    let aprovados = [];//declarando antes do for
    //se i = a 0 ou meno que tamanho do array vamos colocar mais 1 no i
    for(let i = 0; i < arr.length; i++){
        //se aluno tiver meidia ou maior ele e aprovado
        if(arr[i].nota >= media){
         aprovados.push(arr[i].nome);
        }
    }
    return aprovados;
}