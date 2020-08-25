chefe()

function chefe(){
    exe7()
}

function exe7(){

    var soma = 0
    var conta = 0
    var numero = Number(prompt("Informe um numero"))
    do {
        conta++
        soma = soma + numero
        numero = Number(prompt("Informe o número. Digite número negativo para encerrar"))
    }
    while(numero >=0)

    console.log(`A média dos numeros informdos é ${soma /conta}`)
}

