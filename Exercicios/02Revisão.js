const prompt = require ("prompt-sync") ({sigint: true});

//Exercicio 1:

let nome = "Alan";

let maisculas = nome.toUpperCase();

console.log(maisculas)

//Exercicio 2

let numA = 15;
let numB = 5;

console.log(numA + numB)
console.log(numB - numA)
console.log(numA * numB)
console.log(numA / numB)
console.log(numA > numB)

//Exercicio 3 


let idade = prompt("Digite sua idade: ")

if (idade < 18){
    console.log("menor de idade")
}
if (idade >= 18){
    console.log("maior de idade")
}
else console.log("menor de idade")


//Exercicio 4


for(let i = 1; i < 100; i++){
    console.log(i)
}


//Exercicio 5

function multiplicação(num){
    const dobro = (num * 2)
    const triplo = (num * 3)
    const quadrado = (num * num)

    console.log(dobro)
    console.log(triplo)
    console.log(quadrado)
}

multiplicação(5)



//Exercicio 6

let numeros = [10, 20, 30, 40, 50]

numeros.push(60)
console.log(numeros)

numeros.shift()
console.log(numeros)

let maiornumero = Math.max(...numeros)
console.log(maiornumero)

let menornumero = Math.min(...numeros)
console.log(menornumero)


//Exercicio 7

let strings = ["Maçã", "Banana", "Abacaxi", "Laranja"]
console.log(strings)

let StringsMaiusculas = strings.map((strings) => strings.toUpperCase());
console.log(StringsMaiusculas);

let stringsComA = strings.filter((strings) => strings.includes("a"))
console.log(stringsComA)



//Exercicio 8

let pessoa = {
    nome: "Alan",
    idade: 24,
    cidade: "Brasilia"
}
pessoa.profissão = "desenvolvedor"
console.log(pessoa)

delete pessoa.idade 
console.log (pessoa)

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}


//Exercicio 9

let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R. Tolkien", 
    ano: 1954,
}

let {titulo, autor} = livro;
console.log(titulo)
console.log(autor)

function obterDescrição(livro){
    return `O livro "${livro.titulo}" foi escrito por ${livro.autor}.`;
}
let descricao = obterDescrição(livro);
console.log(descricao);

