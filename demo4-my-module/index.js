/**
 * PUC-Minas / Arquitetura de Sistemas Distribuídos
 * Author: Marcos Eduardo da Silva Santos
 * File: my-module/funcoes.js
 * GitHub: 
 */
const calc = require('./my-module/funcoes');

const x = 10;
const y = 2;

try {

    console.log('a) 1 + 1 = '           + calc.somar(1,1));
    console.log('b) -123 + 123123 = '   + calc.somar(-123, 123123));
    console.log('c) 8 * 0 = '           + calc.multiplicar(8,0));
    console.log('d) 1239123 * 12313 = ' + calc.multiplicar(1239123,12313));
    console.log('e) 123 / -12 = '       + calc.dividir(123,-12));
    console.log('f) 313123 / 0 = '      + calc.dividir(313123,0));

}catch (e) {
    console.log(e);
}