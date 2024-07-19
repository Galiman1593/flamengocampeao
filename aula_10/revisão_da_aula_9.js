//1 - paradigma de orientação e objetos
//classes e objetos

//turm(turno, modalidade), instrutor, 

class aluno {
     constructor(matricula, nome){
        this.matricula = matricula;
        this.nome = nome;
     }
}

const caio = new aluno ("1303", "Caio");
const Ian = new aluno ("1304", "Ian");
console.log(caio, Ian);