/*
O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.
*/

let numero1 = Number(prompt("Insira o primeiro numero: "))
let numero2 = Number(prompt("Insira o segundo numero: "))

document.write(`A soma dos dois numeros é: ${numero1+numero2}, 
<br>
A subtração dos dois números é: ${numero1-numero2},
<br>
A multiplicação dos dois números: ${numero1*numero2}, 
<br>
A divisão dos dois números: ${numero1/numero2},
<br>
O resto da divisao dos dois números: ${numero1%numero2} <br>`);

(function(){
  if(numero1%numero2 == 0){
    document.write("É par! <br>")
  }else{
    document.write("É impar! <br>")
  }
})();

(function(){
if(numero1==numero2){
  document.write("São iguais")
}else{
  document.write("São diferentes")
}
})();


