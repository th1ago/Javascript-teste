const calculadora = require("./calc.js");
const prompt = require('prompt-sync')();

function options(){
    console.log(`
    1-somar
    2-subtrair
    3-multiplicar
    4-dividir
    9-sair
    `);
}

function optionSelector(option) {
    const num1 = Number(prompt("Digite um numero? "));
    const num2 = Number(prompt("Digite o segundo? "));

    if (option == "1"){
        return calculadora.soma(num1, num2);
    }

    if (option == "2"){
        return calculadora.substracao(num1, num2);
    }
}

let option;
while(option !== "9"){
    options()
    option = prompt("Qual o sua opcao? ");

    if (option !== "9"){
        const result = optionSelector(option);
        console.log(result);
    }
}
