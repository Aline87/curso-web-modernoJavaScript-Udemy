function compras(trabalho1, trabalho2) {
    const comprarSoverte = trabalho1 || trabalho2 // ou ||
    const comprarTv50 = trabalho1 && trabalho2 // e &&
    const comprarTv32 = trabalho1 != trabalho2 // diferente !=
    const manterSaudavel = !comprarSoverte

    return { comprarSoverte, comprarTv32, comprarTv50, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))