/*
2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre
a condição de peso de uma pessoa adulta.

Formula do IMC
IMC = peso / (altura * altura);

Elabore um algoritimo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

IMC em adulto. 
Condição:

- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/

let peso = 150, altura = 1.75;
let imc = peso / (altura * altura);

console.log(imc);

if(imc < 18.5){
    console.log('Abaixo do peso');
}else if(imc >= 18.5 && imc < 25){
    console.log('Peso normal');
}else if(imc >= 25 && imc < 30){
    console.log('Acima do peso');
}else if(imc >= 30 && imc < 40){
    console.log('Obeso');
}else{
    console.log('Obesidade Grave');
}

/* Resolução mostrada na aula.

const peso = 65;
const altura = 1.70;
const imc = peso / (altura * altura); => Nota posso usar uma clase (Math.pow(altura, 2); 
para calcular a potencia ao quadrado da altura) <=

console.log(imc);

if(imc < 18.5){
    console.log('Abaixo do peso');
}else if(imc >= 18.5 && imc < 25){
    console.log('Peso normal');
}else if(imc >= 25 && imc < 30){
    console.log('Acima do peso');
}else if(imc >= 30 && imc < 40){
    console.log('Obeso');
}else{
    console.log('Obesidade Grave');
}

*/

// #ContratoDeCompromisso