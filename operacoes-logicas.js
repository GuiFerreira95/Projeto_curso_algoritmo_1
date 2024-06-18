/*
Var
   nota1, nota2, media: real
   nome: caractere
   passou: logico

Inicio
   passou := falso
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a nota 1 do aluno: ")
   leia(nota1)
   escreval("Digite a nota 2 do aluno: ")
   leia(nota2)
   media := (nota1 + nota2) / 2

   se media >= 7 entao
      passou := verdadeiro
   fimse
   
   se ( passou ) & ( media >= 5 || media <=7 ) então
      escreval("aprovado!", nome)
   senão
      escreval("Reprovado!", nome)
   fimse
Fimalgoritmo 
*/

var nota1, nota2, media, passou;
nome = prompt("Digite o nome do aluno:")
nota1 = prompt("Digita a nota 1:")
nota2 = prompt("Digita a nota 2:")
passou = false;

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if (media >= 7)
    passou = true;
else 
    alert("Tente novamente , Reprovado!" + nome)
endif

if (passou & media >=7)
    alert("Parabens , Aprovado!" + nome)
else 
    alert("Tente novamente , Reprovado!" + nome)
endif