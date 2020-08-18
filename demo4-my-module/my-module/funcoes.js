/**
 * PUC-Minas / Arquitetura de Sistemas Distribuídos
 * Author: Marcos Eduardo da Silva Santos
 * File: my-module/funcoes.js
 * GitHub: 
 */
function somar (x, y) {
    return x + y;
}
function subtrair (x, y) {
    return x - y;
}
function dividir (x, y) {
    if(y==0) throw "You Shouldn't divide a number by zero";
    return x / y;
}
function multiplicar (x, y) {
    return x * y;
}

module.exports = {
    somar: somar,
    subtrair: subtrair,
    dividir: dividir,
    multiplicar: multiplicar,
}