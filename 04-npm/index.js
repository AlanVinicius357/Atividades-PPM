// codigo para executar projeto

//importar um modulo

import {calcularIMC,tabelaIMC} from "./CalculadoraIMC.js"

console.log(">>> Calculadora IMC <<<")
console.table(tabelaIMC)

const peso = 89
const altura = 1.85
 
const resultado = calcularIMC(peso, altura)

console.log("Resultado IMC: ")
console.log(resultado.toFixed(2))

// importar o modulo externo, uma blibioteca

import moment from"moment";

const hoje = moment().locale('pt-br')

console.log("Data: ")
console.log(hoje.format("DD/MM/YYYY"))