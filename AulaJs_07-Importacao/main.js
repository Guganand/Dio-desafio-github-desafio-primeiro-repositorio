/*

//importando as function 
const funcoes = require('./AulaJs_07-Funcoes-auxiliares');

//exibe o que está importando exemplo = { gets: [Function: gets], print: [Function: print] }.
console.log(funcoes.gets());

*/

// objeto destructor
const {gets, print} = require('./AulaJs_07-Funcoes-auxiliares');

print(gets());

//exemplo objeto destructor, os codigos abaixo são equivalente 
const pessoa = {nome:'vitor'};

const nome = pessoa.nome;

console.log(pessoa.nome);
console.log(nome);

// #ContratoDeCompromisso