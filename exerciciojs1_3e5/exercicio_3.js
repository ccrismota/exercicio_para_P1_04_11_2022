/*
beecrowd | 1003
Link: https://www.beecrowd.com.br/judge/pt/problems/view/1003
Soma Simples
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1

Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma 
entre elas e atribua à variável SOMA. A seguir escrever o valor desta variável.

Entrada
O arquivo de entrada contém 2 valores inteiros.

Saída
Imprima a mensagem "SOMA" com todas as letras maiúsculas, com um espaço em branco antes e 
depois da igualdade seguido pelo valor correspondente à soma de A e B. Como todos os problemas, 
não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

Exemplos de Entrada	                                      Exemplos de Saída
30                                                            SOMA = 40
10      
*/
//impotando dependencias
let prompt = require('prompt-sync')();

const A = +prompt("Digite um valor para A: ");
const B = +prompt("Digite um valor para B: ");
const SOMA = A + B;

console.log("SOMA = " + SOMA);