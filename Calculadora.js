var prompt = require('prompt-sync')();

function sum(){
    //TODO: Implementar soma
}

function sub(){
    //TODO: Implementar subtração
    let x = prompt(Number("Primeiro número: "))
    let y = prompt(Number("Segundo número: "))

    let a = x-y
        console.log(`${x} - ${y} = ${a.toFixed(2)}`)

    let b = y-x
        console.log(`${y} - ${x} = ${b.toFixed(2)}`)
}

function mult(){
    //TODO: Implementar multiplicação
}

function div(){
    //TODO: Implementar divisão
}
