// 1 diz qua foi o operador passado e na sua saída o que ele fez

const operadorEscolido = "!==";

if (operadorEscolido === "+") {
  console.log(
    "o operador de mais é responsavel por somar inteiros ou concatenar strings "
  );
  //aritimeticos
} else if (operadorEscolido === "-") {
  console.log("subtrai valores inteiros");
} else if (operadorEscolido === "*") {
  console.log("multiplica valores inteiros");
} else if (operadorEscolido === "poggers") {
  console.log("fica flinstons");
} else if (operadorEscolido === "/") {
  console.log("divide valores inteiros");
} else if (operadorEscolido === "pogChamp") {
  console.log("omegalul total, wal");
}
else if (operadorEscolido === "%") {
    console.log("operador de resto, faz a divisao mas exibe o resto ao em vez do resultado");
}
//coparação
else if (operadorEscolido === "==") {
  console.log("operador de igualdade, compara de o VALOR é igual");
} else if (operadorEscolido === "===") {
  console.log("Operador de idêntico, compara se o TIPO e o VALOR são iguais");
}
else if (operadorEscolido === "!==") {
    console.log("operador de DIFERENTE, compara se é diferente do valor");
}
else if (operadorEscolido === "<=") {
    console.log("Operador de MENOR ou IGUAL, verifica se o valor e MENOR ou IGUAL");
}
else if (operadorEscolido === ">=") {
    console.log("Operador de MAIOR ou IGUAL, verifica se o valor e MAIOR ou IGUAL");
}
//logico
else if (operadorEscolido === "&&") {
    console.log("Operador de 'É', todas as condições devem ser verdadeiras");
}
else if (operadorEscolido === "||") {
    console.log("Operador de OU, pelo menos uma das condições devem ser veradeiras");
}
else if (operadorEscolido === "!") {
    console.log("operador 'NOT' ou oposição, valor contratio ou oposto");
}