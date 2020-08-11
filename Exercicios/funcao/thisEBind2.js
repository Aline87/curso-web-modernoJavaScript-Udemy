function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
            self.idade++
                console.log(self.idade)

        }.bind(this), 1000) // Cntrol+Alt+ N para execultar // control +Alt M para parar a execulsão
}

new Pessoa