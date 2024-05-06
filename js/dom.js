const divs = document.getElementsByTagName('div');
const h2s = document.getElementsByTagName('h2');
const titulo = document.getElementById('titulo');
const input = document.getElementById('input');
const paragrafo = document.getElementById('paragrafo');
const elementsMarginTop2  = document.getElementsByClassName('mt-2');


function alterarHtml(){
    titulo.textContent = input.value;
    titulo.style.color = '#ac4389';
    for(let element of elementsMarginTop2){
        element.classsName = 'mt-4';   
    }   

    input.value = '';

    const novoP = document.createElement('p');
novoP.textContent = 'Novo texto adicionado via JavaScript';

paragrafo.parentNode.appendChild(novoP); 

}


