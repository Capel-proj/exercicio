    function exe9 (numero){
        var soma = 0
        for(var i = numero; i> numero ; i--){
            if (numero % i == 0) {
            soma = soma + i
            }
        }
        console.log(`Soma dos divisores é ${soma}`)
    }