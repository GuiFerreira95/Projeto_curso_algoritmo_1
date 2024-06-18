/*
Var
// Seção de Declarações das variáveis 
       nome: caractere
       numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval ("Digite o nome:")
   leia (nome)
   escreval ("Digite o número:")
   leia (numero)
    // isso é a parte da concatenação
    escreval (nome, " : " , numero, 1995)
    */

    var nome, numero;

    nome = prompt("Digite seu nome: ")
    numero = prompt("Digite seu numero: ")

    document.getElementById("Paragrafo").innerText = nome + " : " + numero
    