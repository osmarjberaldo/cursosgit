let lines = gets().split('\n');

let line = lines.shift().split(" ");
let inicio = parseInt(line[0]);
let final = parseInt(line[1]);

if (inicio >= 0 && final <= 2) {
    //console.log(`${inico} e ${final}`);
   // print('nova');
} else if (final > inicio && final <=  97 ) {
    //console.log(`${inico} e ${final}`);
    //print('cheia');
} else if ( inico >= final && final <= 96  ) {
    //console.log(`${inico} e ${final}`);
   // print('');                 //complete o código nos espaços em branco
} else { 
    //console.log(`${inico} e ${final}`);
   // print('cheia');
}