//armazanado um funcão em uma variavel 
const imprirSoma = function(a, b) {
    console.log(a + b)
}

imprirSoma(2, 3)

// Armazenando uma funçao arrow em uma variavel 

const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

//retorno implícito 
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))