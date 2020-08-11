exibirNumerosPrimos(120)

function exibirNumerosPrimos(limite) {
    for (let numero = 1; numero <= limite; numero++) {
        let ehPrimo = true;

        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                ehPrimo = false
                break
            }
        }
        if (ehPrimo)

            console.log(" Os numero primos são : " + numero)

    }

}