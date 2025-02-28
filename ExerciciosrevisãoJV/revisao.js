const prompt = require ("prompt-sync") ({sigint: true});


//operadores aritmeticos

const soma = 2+2
const subtração = 2-2
const multiplicação = 2*2
const divisao = 2/2
const resto = 3 % 2

//operadores de comparçãp
const igual = 2 == 2
const diferente = 3 != 2
const maior = 3 > 2
const menor = 2 < 3
const maiorouigual= 3 >= 2
const menorouigual= 2 <= 3

//estruturas condições

idade = 16;

if (idade >= 18) {
    console.log("maior de idade")
}
if (idade >= 18) {
    console.log("maior de idade")
} else {
    console.log("menor de idade")
}

//operador ternario 

const mensagem = idade >= 18? "Maior de idade" : "Menor de idade"
console.log("Mensagem -> ", mensagem)


//arrays - listas 
const frutas = ["maça", "banana", "uva"]
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])


// diz quantas frutas a na array
console.log("Quantas frutas tem nessa array? ", frutas.length)

// adiciona uma array
frutas.push("laranja")

// diz quantas frutas tem nessa array
console.log("Quantas frutas tem nessa array? ", frutas.length)



//fala uma fruta por vez
frutas.forEach(fruta => console.log(fruta))


// remove a ultima fruta do array
frutas.pop()
console.log(frutas)
a