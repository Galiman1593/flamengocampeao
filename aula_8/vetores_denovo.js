const PrimeiraListadeFrutas = ["morango", "uva"];

//1 Crie umarray chamado ListaPremium e coloque o nome de 5 pessoas
//2 Crie um array chamado DiasDaSemanaSelecionados e coloque segunda quarta e sexta
//3Crie um array chamado Datas e coloque 3 datas diferentes
//4 Crie um array chamado NumerosPrimos e coloque 3 numeros primos
//5 Crie um array chamado Feriados e coloque a data de 3 feriados
//6 crie um array chamado alicotasImpostodeRenda com as porcentagens do imposto de renda
//7 crie uma lista chamada ValoresDiferentes com um texto, numero e um booleano.

const listaPremium = ["jorge", "Brunna", "Pedro", "Miguel", "Gabriel"];
const liasDaSemanaSelecionados = ["segunda", "quarta", "sexta"];
const datas = ["23/05/2024", "12/06", "29/06"];
const numerosPrimos = [2, 3, 5];
const feriados = ["01/04/2000", "12/06/2000", "25/12/2000"];
const aliquotasImpostodeRenda = ["0%", "7,5%", "15,0%"];
const valoresDiferentes = ["poliana", 3245, false];

//eu preciso percorer um array elemento por elemento, exibindo os seus respectivos nomes e seus indices

const nomes = ["joão", "renato", "natalia", "pedro", "leo"];

function exibirNomesComIndicie(lista){
    for(contador = 0; contador < lista. length; contador++)
    console.log("o nome é " + lista[contador] + " e o seu indice é " + contador);
}

exibirNomesComIndicie(nomes);