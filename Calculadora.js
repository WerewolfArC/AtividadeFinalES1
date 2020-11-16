var prompt = require('prompt-sync')();

function sum(){
    //TODO: Implementar soma
    let X = prompt(Number("Primeiro número: "))
    let Y = prompt(Number ("Segundo número: "))

    let A = X+Y
    let B = Y+X

    console.log(`${X} + ${Y} = ${A.toFixed(2)}`)
    console.log(`${Y} + ${X} = ${B.toFixed(2)}`)
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
