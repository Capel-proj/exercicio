chefe()

function chefe(){
        var vetor = [] 
    do{
        var opcao = Number(prompt("Escolha : \n [1] Cadastrar \n [2] Média \n [3] Sair do programa"))
    switch(opcao){
        case 1:
            entrada(vetor)
            break
        case 2:
            media(vetor)
            break
        case 3:
             console.log(`Obrigado por ultilizar nosso programa.`)
            break
        default: console.log(`Opção inválida`)

    }

    }
    while (opcao != 3)

}

function entrada(vet){
    //console.log(`entrou na função entrada`)
    var objeto = new Object
    objeto.numero = Number(prompt("Informe os valores positivos"))
    if (objeto.numero < 0){
        console.log(`Valor Inválido`)
        entrada(vet)
    } else {
        vet.push(objeto) //insere
    }
    
}

function media(vet){
    //console.log(`entrou na função média `)
    if (vet == []){
        console.log(`Nenhum número cadastrado`)
    }
    else {
        var soma = 0
        for(var i=0;i<vet.length;i++){
            soma = soma + vet[i].numero
        }
        console.log(`A média é ${soma/vet.length}`)
    }
}