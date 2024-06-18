/*
Var
      nome: caracter
      idade, limite, contador: inteiro

Inicio 
     escreva("Digite a quantidade de vezes que será verificado a idade:  ")
     leia(limite)
     contador := 0
     
     enquanto contador < limite faca
         escreva("Digite o nome da pessoa:  ")
         leia(nome)
         escreva("Digite a idade do ", nome , " : " )
         leia(idade)
         
         se idade > 18 entao
             escreval (nome , " Você é MAIOR de idade!")
         senao
             escreval (nome , " Você é MENOR de idade!")
         fimse
         contador := contador + 1
     fimenquanto

Fimalgoritmo
*/

function acaoBotao(params) {
var nome, idade, limite, contador

limite = prompt("Digite a quantidade de vezes que sera verificado a idade:  ")
contador = 0

while(contador < limite){
    nome = prompt("Digite o nome da pessoa:  ")
    idade = prompt("Digite a idade do " + nome)
    
    if (idade >= 18)
        document.getElementById("Paragrafo").innerText = nome + " Voce e MAIOR de idade!"
    else
        document.getElementById("Paragrafo").innerText = nome + " Voce e MENOR de idade!"
    endif
    contador == contador + 1
  }
}
