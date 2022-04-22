// pode usar export function
function mostraIdade(nome, idade){
    return `A idade de ${nome} é ${idade}`; 
}

 function mostraCidade(nome, cidade){
    return `A cidade de ${nome} é ${cidade}`; 
}

 function mostraHobby(nome, hobby){
    return `A Hobby de ${nome} é ${hobby}`; 
}

//ou pode usar
export{ mostraIdade, mostraCidade, mostraHobby};