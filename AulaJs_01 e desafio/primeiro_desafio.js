/* Faça um programa para calcular o valor de uma viagem.

voçe terá 3 variaveis. Sendo elas:
1- preço do combustivel;
2- Gasto médio de combustivel do carro por KM;
3-Distância em Km da viagem;

*/

let precoCombustivel = 5.79;
let gastoPorKM = 12;
let distEmKM =1580;

let valorViagem = distEmKM / gastoPorKM * precoCombustivel;

console.log(valorViagem.toFixed(2)); // toFixed(2)=> arredonda um valor quebrado 

// #contratoDeCompromisso