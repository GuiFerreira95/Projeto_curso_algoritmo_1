/*
   nota1, nota2, media: real
   nome: caractere

escreval("Digite o nome do aluno: ")
leia(nome)
escreval("Digite a nota 1 do aluno: ")
leia(nota1)
escreval("Digite a nota 2 do aluno: ")
leia(nota2)
media := (nota1 + nota2) / 2

se media >= 7 entao
   escreval ("Parabéns, Aprovado!", nome)
   senao
   escreval ("Tente novamente, Reprovado!", nome)
fimse
*/

var nota1, nota2, media;
nome = prompt("Digite o nome do aluno:")
nota1 = prompt("Digita a nota 1:")
nota2 = prompt("Digita a nota 2:")

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if (media >= 7)
    alert("Parabens , Aprovado!" + nome)
else 
    alert("Tente novamente , Reprovado!" + nome)
endif

