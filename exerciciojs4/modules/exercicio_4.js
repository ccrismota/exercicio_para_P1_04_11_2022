/**
beecrowd | 1036 | Linguagem: JavaScript
link: https://www.beecrowd.com.br/judge/pt/problems/view/1036
Fórmula de Bhaskara
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1

Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. 
Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, 
caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". 
Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem 
correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

Exemplos de Entrada	                                   Exemplos de Saída
10.0 20.1 5.1                                           R1 = -0.29788
                                                        R2 = -1.71212  
                                                        
0.0 20.0 5.0                                            Impossivel calcular

10.3 203.0 5.0                                          R1 = -0.02466
                                                        R2 = -19.68408
0.0 20.1 5.1                                            Impossivel calcular
 */
import { Bhaskara } from '../bhaskara.js';
import prompt from 'prompt-sync';
const entrada = prompt({sigint: true});

let a = +entrada('Digite o valor de A: ');
let b = +entrada('Digite o valor de B: ');
let c = +entrada('Digite o valor de C: ');

const bhaskara = new Bhaskara(a, b, c);
  
if (bhaskara.calcularDelta() < 0 || bhaskara.a == 0) {
    console.log('Impossivel calcular');
} else {
    console.log(`R1 = ${bhaskara.calcularX1().toFixed(5)}`);
    console.log(`R2 = ${bhaskara.calcularX2().toFixed(5)}`);
}