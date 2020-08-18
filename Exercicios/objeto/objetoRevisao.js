const produto = new Object
produto.nome = "Cadeira"
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 8900,
    propiretario: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            logradouro: 'Rua ABC',
            numero: 123
        }

    },
    condutores: [{
        nome: 'Jorge',
        idade: 19,

    }, {
        nome: 'Alice',
        idade: '33'
    }],
    calcularValoresSeguro: function() {}
}

carro.propiretario.endereço.numero = 1000
carro["propiretario"]['endereço']['logradouro'] = 'Av Gigante'
console.log(carro)