function sum(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mult(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    if (num2 == 0) {
        return "Erro, nao pode dividir por zero";
    }
    return num1 / num2;
}


module.exports = {
    soma: sum,
    substracao: sub,
    multiplicacao: mult,
    divisao: div
};