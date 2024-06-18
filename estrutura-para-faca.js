/*
Var
      numero, fatorial, contador: inteiro

Inicio 
      escreva("Digite o número para calcular o fatorial:  ")
      leia(numero)
      fatorial := 1
      para contador de 1 ate numero faca
           fatorial := fatorial * contador
      fimpara
      
      escreva("O fatorial de ", numero , " é ", fatorial)
Fimalgoritmo
*/

function acaoBotao(params) {
    var numero, fatorial;
    numero = prompt("Digite o numero para calcular o fatorial:  ")
    fatorial = 1
    for (var contador = 1; contador <= numero; contador ++ ) {
        fatorial = fatorial * contador 
    }
document.getElementById("Paragrafo").innerText = "O fatorial de  " + numero + "e:  " + fatorial
}

