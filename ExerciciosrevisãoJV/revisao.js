const prompt = require ("prompt-sync") ({sigint: true});


//operadores aritmeticos

const soma = 2+2
const subtração = 2-2
const multiplicação = 2*2
const divisao = 2/2
const resto = 3 % 2

//operadores de comparção
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





let pessoa = {
    nome: "Alan",
    idade: 24,
    peso: 89,
    altura: 185
}
console.log(pessoa.nome)
pessoa.idade = 40
console.log(pessoa.idade)

//destribuição de objetos

const {peso, altura} = pessoa
console.log(peso)
console.log(altura)

//propagação de objetos

const endereço = {
    cidade: "Brasilia",
    uf: "DF"
}

const pessoaCompleta = {
    ...pessoa,
    ...endereço
}
console.log(pessoaCompleto)




//funções
//declaração da função
function subtração(numA, numB){
    const resultado= numA - numB
    console.log(resultado)
}
//usando a função
subtração(45,43)
subtração(15726, 5442)
subtração(21459874569, 2544785454)




function divisao(numA, numB){
    const resultado= numA / numB
    console.log(resultado)
}
//usando a função
divisao(454,43)
divisao(15726, 5442)
divisao(21459, 254)



// função anonima
const subtrair = function(numC, numD){
const resultado = (numC - numD)
console.log(resultado)
}
subtrair(45, 25)



//arrow function
const multiplicar = (numE, numF) => numE * numF
multiplicar(14,55)