var num1 = parseFloat(prompt("Digite a primeiro número: "));
var num2 = parseFloat(prompt("Digite o segundo número: "));

if (num1 > num2){
    alert("O maior número é: " + num1);
}else if (num2 > num1){
    alert("O numero maior é: " + num2)
}else{
    alert("Os dois números são iguais.")
}
