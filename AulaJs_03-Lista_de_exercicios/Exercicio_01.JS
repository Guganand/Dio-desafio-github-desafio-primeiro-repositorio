/*

1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima 
a sua média e a sua classificação conforme a tabela a baixo.

Média = (nota1 + nota2 + nota3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/

let nota1 = 8, nota2 = 8, nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Passou de semestre');
}

/* Resolução apresentada na aula

const nota1 = 8;
const nota2 = 8;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Passou de semestre');
}
 
*/

// # ContratoDeCompromisso

