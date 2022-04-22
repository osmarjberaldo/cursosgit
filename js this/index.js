const pessoa = {
    nome: 'miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomeThis(){
    console.log(this.nome);

}

//getSomeThis.call(animal); //call usa com nome da contante


getSomeThis.apply(animal); // apply muito parecido com call

//diferenta e por agumento call enviado exemplo soma.call(myObj, 1 ,2);
//no apply exemplo soma.call(myObj, [1 ,2]);

//bin copia a função
const retonaNomes = function(){
    return this.nome;
};
let bruno = retonaNomes.bind({nome: 'Bruno'});
console.log(bruno());

//arrow funcions ela igual funciona de const
const halloworld = () => "Hallo Wolrd";
console.log(halloworld());
