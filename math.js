const soma = function(x, y){
    return x + y;
}

const subtracao = function(x, y){
    return x - y;
}

const multiplicacao = function(x, y){
    return x * y;
}

const divisao = function (x, y){
    return y === 0 ? "Não é possível dividir por zero." : x/y;
}

module.exports = {
    soma: soma,
    subtracao: subtracao,
    multiplicacao: multiplicacao,
    divisao: divisao
};