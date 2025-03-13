
import { soma, subtracao, multiplicacao, divisao } from "./calculadora.js";

console.log("Soma: ", soma(578, 51));
console.log("Subtração: ", subtracao(10410, 540));
console.log("Multiplicação: ", multiplicacao(104, 50));
console.log("Divisão: ", divisao(100, 10));



import moment from"moment";

function calcularIdade(anoNascimento,) {
    
    const anoAtual = moment().year();  
    const idade = anoAtual - anoNascimento;  
    return idade;
}


const anoNascimento = 1990; 
const idade = calcularIdade(anoNascimento);
console.log(`Idade: ${idade} anos`);