
function acaoBotao(params) {
    var valor1, valor2, resultado, operacao;
valor1 = prompt("Digite o valor 1: ")
operacao = prompt("Digite a operação desejada: (Ex: + , - , * , /)")
valor2 = prompt("Digite o valor 2: ")

switch (operacao){
    case "+":
        resultado = parseInt(valor1) + parseInt(valor2)   
        break;
    case "-":
        resultado = parseInt(valor1) - parseInt(valor2)   
        break; 
    case "*":
        resultado = parseInt(valor1) * parseInt(valor2)   
        break;
    case "/":
resultado = parseInt(valor1) / parseInt(valor2)   
break;       
}

document.getElementById("Paragrafo").innerText = resultado
}