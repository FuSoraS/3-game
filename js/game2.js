function createRandomNum() {
    // random number
    numAletorio = Math.floor(Math.random() * 3) + 1;
  }
function nombres(){
    //Mostrar el nombre del jugador
    const nombre = document.getElementById("jd").value;
    document.getElementById("mostrar").innerText= "El Jugador se llama: "+nombre;
}
const result = document.getElementById('result');
//Al elegir uno de los tres tener una probabilidad aletoria de poder ganar perder o empatar
function piedra(){
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
    if(numAletorio == 1){
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
