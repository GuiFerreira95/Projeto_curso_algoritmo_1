/*
Var
        sairLoop: caractere
        valor1, valor2: real

Inicio 
   repita
         escreva("Digite o Primeiro valor: ")
         leia(valor1)
         escreva("Digite o Segundo valor: ")
         leia(valor2)
         escreval("Resultado: ", valor1 + valor2)
         escreval("Deseja sair? s/n")
         leia(sairLoop)
    ate sairLoop <> "n"

Fimalgoritmo
*/


function acaoBotao() {
    var sairLoop, valor1, valor2
    do{
        valor1 = prompt("Digite o Primeiro valor: ")
        valor2 = prompt("Digite o Segundo valor: ")
        document.getElementById("Paragrafo").innerText = "Resultado: " + (parseInt(valor1) + parseInt (valor2))
        sairLoop = prompt("Deseja sair? s/n")
    }
    while(sairLoop == "n")
}


            

      