const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

const contadores = document.querySelector('contador');

const tempObjetivo01=new Date('2025-02-05T00:00:00');
const tempObjetivo02=new Date('2024-12-31T00:00:00');
const tempObjetivo03=new Date('2025-02-08T00:00:00');
const tempObjetivo04=new Date('2025-02-05T00:00:00');

const tempos = [tempObjetivo01,tempObjetivo02,tempObjetivo03,tempObjetivo04]

for (let i = 0; i<tempos.length; i ++){
    contadores[i].textContent = calculaTempo(tempos[i])
}

for(let i= 0; i<botoes.length; i++){
    botoes[i].onclick = function (){

        for(j=0; j<botoes.length; j++){
            botoes[j].classList.remove('ativo')
            textos[j].classList.remove('ativo')

        }

        botoes[i].classList.add('ativo')
        textos[i].classList.add('ativo')
    } 
}
function calculatempo (tempObjetivo){
    let tempoAtual = new date ()
    let tempofinal = tempObjetivo - tempoAtual

    let segundos = Math.floor(tempofinal/1000);
    let minutos = Math.floor(minutos/60);
    let horas =Math.floor(horas/60);
    let dias =Math.floor(dias/24);

segundos %= 60;
minutos%=60;
horas%=24;


return dias + "dias"+ horas + " horas " + minutos +"minutos " + segundos + "segundos"
}
