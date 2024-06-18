/*
Var
// Seção de Declarações das variáveis 
     valor1, valor2, resultado: real
     operacao: caractere
     
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
      //("A proposta desse programa é calcular dois valores de sua escolha.")
      
      escreva("Digite o valor 1: ")
      leia(valor1)
      
      escreva("Digite a operação desejada: (Ex: + , - , * , /)")
      leia(operacao)

      escreva("Digite o valor 2: ")
      leia(valor2)
      
se operacao = "+" entao
         resultado := valor1 + valor2
      senao
           se operacao = "-" entao
              resultado := valor1 - valor2
         senao
              se operacao = "*" entao
                 resultado := valor1 * valor2
              senao
                   se operacao = "/" entao
                      resultado := valor1 / valor2
         
                    fimse
             fimse
      fimse
fimse

 escreva("O resultado do cálculo é: ", resultado)
         
Fimalgoritmo
*/

function acaoBotao(params) {
    var valor1, valor2, resultado, operacao;
valor1 = prompt("Digite o valor 1: ")
operacao = prompt("Digite a operação desejada: (Ex: + , - , * , /)")
valor2 = prompt("Digite o valor 2: ")

if (operacao == "+"){
    resultado = parseInt(valor1) + parseInt(valor2)
} else if (operacao == "-"){
    resultado = parseInt(valor1) - parseInt(valor2)
}else if (operacao == "*"){
    resultado = parseInt(valor1) * parseInt(valor2)
}else if (operacao == "/"){
    resultado = parseInt(valor1) / parseInt(valor2)
}
document.getElementById("Paragrafo").innerText = resultado

}
