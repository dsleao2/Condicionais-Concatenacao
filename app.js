/* Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!"*/

alert('Boas vindas ao jogo do dia secreto');

let chuteDiaDaSemana = prompt ('Qual é o dia da semana?')
console.log('Dia da semana:',chuteDiaDaSemana)

let diaDaSemana = 'Sábado';

console.log('Resultado da comparação;',chuteDiaDaSemana == diaDaSemana);

if (chuteDiaDaSemana == diaDaSemana) {
    alert ('Bom fim de semana')
} else {
    alert ('Boa semana!')
}