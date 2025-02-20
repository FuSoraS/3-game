function showName(){
    // show of name player
    const name = document.getElementById("input-name").value;
    let error = document.getElementById('error');
    let showText = document.getElementById('show');

    if(name === ''){
        error.textContent = 'Su nombre está vacío';
        showText.textContent = ''
    }else{
        error.textContent = '';
        showText.innerText= `El Jugador se llama: ${name}`;
    }
}
const result = document.getElementById('result');

function showResult(status, choiceMachine){
    if(status === 'Empate'){
        result.innerText = `${status} los dos elegieron ${choiceMachine}`;
    }else{
        result.innerText = `${status}, el contrario elegio ${choiceMachine}`;
    }
}
// Generate a number random for choose the winner
function chooseOption(choose){
    numRandom = Math.floor(Math.random() * 3) + 1;
    if(choose === 'rock'){
        if(numRandom === 1){
            showResult('Empate', 'piedra')
        }else if(numRandom === 2){
            showResult('Perdiste', 'papel')
        }else{
            showResult('Ganaste', 'tijera')
        }
    }else if(choose === 'scissors'){
        if(numRandom === 1){
            showResult('Perdiste', 'piedra')
        }else if(numRandom === 2){
            showResult('Ganaste', 'papel')
        }else{
            showResult('Empate', 'piedra')
        }
    }else if(choose === 'paper'){
        if(numRandom === 1){
            showResult('Ganaste', 'piedra')
        }else if(numRandom === 2){
            showResult('Empate', 'piedra')
        }else{
            showResult('Perdiste', 'tijera')
        }
    }
}