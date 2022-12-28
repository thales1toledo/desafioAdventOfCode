const fs = require("fs"); // importando o módulo fs para usar o leitor de arquivo .txt

const input = fs.readFileSync("./input.txt", { encoding: "utf-8", flag: "r" }) // lendo o arquivo input.txt
const input2 = fs.readFileSync("./input2.txt", { encoding: "utf-8", flag: "r" }) // lendo o arquivo input2.txt


function NotRepeated(array) {
    return new Set(array).size === array.length; // retorna true se o array não tiver elementos repetidos
}

function Read1() {

    let array = []; // criando um array vazio

    for (let i = 0; i < input.length; i++) {
        array.push(input[i]); // adicionando cada elemento do input no array
        if (array.length > 4) { // separando o texto todo do input em grupos de 4 elementos
            array.shift(); // remove o primeiro elemento do array para que seja feito o novo teste
        }
        if (array.length === 4 && NotRepeated(array)) { // se o array tiver 4 elementos e não possuir elementos repetidos
            console.log(i + 1) // imprime o número de testes feitos até que ache o primeiro grupo de 4 elementos sem repetição de caracteres
            break;
        }
    }
}
// PARTE 2 DO DESAFIO, AQUI É FEITO O MESMO PROCESSO, MAS COM A REGRA DE SER 14 CARACTERES AO INVÉS DE 4 E UM INPUT DIFERENTE
function Read2() {

    let array = []; // criando um array vazio

    for (let i = 0; i < input2.length; i++) {
        array.push(input2[i]); // adicionando cada elemento do input2 no array
        if (array.length > 14) { // separando o texto todo do input2 em grupos de 14 elementos
            array.shift(); // remove o primeiro elemento do array para que seja feito o novo teste
        }
        if (array.length === 14 && NotRepeated(array)) { // se o array tiver 14 elementos e não possuir elementos repetidos
            console.log(i + 1) // imprime o número de testes feitos até que ache o primeiro grupo de 14 elementos sem repetição de caracteres
            break;
        }
    }
}

Read1();
Read2();