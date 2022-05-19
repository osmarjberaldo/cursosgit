// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let x = parseInt(gets());
while (x !== 0) {
  let soma = 0;
  if (x % 2 == 1) {
    for (let i = x + 1; i < x + 10; i++) {
      if (i % 2 == 0) {
        soma += i;
      }
    }
  } else {
    for (let i = x; i < x + 10; i++) {
      if (i % 2 == 0) {
        soma += i;
      }
    }
  }
  print(soma);
  x = parseInt(gets());
}

//Escreva o seu código no espaço em branco
