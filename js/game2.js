function createRandomNum() {
    numAletorio = Math.floor(Math.random() * 3) + 1;
}
function showName(){
    // show of name player
    const name = document.getElementById("input-name").value;
    document.getElementById('show').innerText= "El Jugador se llama: "+name;
}
const result = document.getElementById('result');
// generate a number ramdom for choose the winner

function rock(){
    createRandomNum();
    if(numAletorio === 1){
        result.innerText = "Empate los dos elegieron piedra";
    }else if(numAletorio === 2){
        result.innerText = "Perdiste, el contrario elegio papel";
    }else{
        result.innerText = "Ganaste, el contrario eligio tijera";
    }
}
function papel(){
    createRandomNum();
    if(numAletorio === 1){
        result.innerText = "Ganaste, el contrario eligio piedra";
    }else if(numAletorio === 2){
        result.innerText = "Empate los dos elegieron papel";
    }else{
        result.innerText = "Perdiste, el contrario elegio tijera";
    }
}
 function tijera(){
    createRandomNum();
    if(numAletorio === 1){
        result.innerText = "Perdiste, el contrario elegio piedra";
    }else if(numAletorio === 2){
        result.innerText = "Ganaste, el contrario eligio papel";
    }else{
        result.innerText = "Empate los dos elegieron tijera";
    }
 }
