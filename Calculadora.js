var prompt = require('prompt-sync')();

function sum(){
    //TODO: Implementar soma
    let X = prompt(Number("Primeiro número: "))
    let Y = prompt(Number ("Segundo número: "))

    let A = X+Y
    let B = Y+X

    console.log(`${X} x ${Y} = ${A.toFixed(2)}`)
    console.log(`${Y} x ${X} = ${B.toFixed(2)}`)
}

function sub(){
    //TODO: Implementar subtração
}

function mult(){
    //TODO: Implementar multiplicação
    let X = prompt(Number("Primeiro número: "))
    let Y = prompt(Number ("Segundo número: "))

    let A = X*Y
    let B = Y*X

    console.log(`${X} x ${Y} = ${A.toFixed(2)}`)
    console.log(`${Y} x ${X} = ${B.toFixed(2)}`)
}

function div(dividendo = new Number, divisorfunction div(){
    //TODO: Implementar divisão
    let X = prompt(Number("Primeiro número: "))
    let Y = prompt(Number ("Segundo número: "))

    let A = X/Y
    let B = Y/X

    console.log(`${X} / ${Y} = ${A.toFixed(2)}`)
    console.log(`${Y} / ${X} = ${B.toFixed(2)}`)
}
