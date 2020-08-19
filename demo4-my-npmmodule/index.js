/**
 * PUC-Minas / Arquitetura de Sistemas Distribuídos
 * Author: Marcos Eduardo da Silva Santos
 */
const calc = require('mathematical-functions-node-module');

try {

    console.log('a) 1 + 1 = '           + calc.add(1,1));
    console.log('b) -123 + 123123 = '   + calc.add(-123, 123123));
    console.log('c) 8 * 0 = '           + calc.multiply(8,0));
    console.log('d) 1239123 * 12313 = ' + calc.multiply(1239123,12313));
    console.log('e) 123 / -12 = '       + calc.divide(123,-12));
    console.log('f) 313123 / 0 = '      + calc.divide(313123,0));

}catch (e) {
    console.log(e);
}
