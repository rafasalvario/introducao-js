const olaMundo = 'Olá, mundo! Introdução à JS';
const dataAtual = new Date();


console.log(olaMundo);
console.log(`Data hora: ${dataAtual}`);

function mensagem(mensagem) {
    alert(mensagem);
}

function mensagem2() {
    mensagem('Aprendendo funções');
}

const mensagemFinal = (mensagemFinal) => {
    console.log(mensagemFinal);
}


const verdadeiro = true; 
const naoVerdadeiro = !verdadeiro;

const tudoEVerdadeiro = verdadeiro && naoVerdadeiro;
const tudoEFalso = !verdadeiro && naoVerdadeiro;    
const algumEVerdadeiro = verdadeiro || naoVerdadeiro; 
const algumEFalso = verdadeiro || naoVerdadeiro; 


console.log('verdadeiro', verdadeiro);
console.log('naoVerdadeiro', naoVerdadeiro);
console.log('tudoEVerdadeiro', tudoEVerdadeiro);
console.log('tudoEFalso', tudoEFalso);
console.log('algumEVerdadeiro', algumEVerdadeiro);
console.log('algumEFalso', algumEFalso);










