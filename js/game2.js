function createRandomNum() {
    // random number
    numAletorio = Math.floor(Math.random() * 3) + 1;
  }
function nombres(){
    //Mostrar el nombre del jugador
    const nombre = document.getElementById("jd").value;
    document.getElementById("mostrar").innerText= "El Jugador se llama: "+nombre;
}

//Al elegir uno de los tres tener una probabilidad aletoria de poder ganar perder o empatar
function piedra(){
    createRandomNum();
    if(numAletorio === 1){
        document.getElementById("resultado").innerText = "Empate los dos elegieron piedra";
    }else if(numAletorio === 2){
        document.getElementById("resultado").innerText = "Perdiste, el contrario elegio papel";
    }else{
        document.getElementById("resultado").innerText = "Ganaste, el contrario eligio tijera";
    }
}
function papel(){
    createRandomNum();
    if(numAletorio == 1){
        document.getElementById("resultado").innerText = "Ganaste, el contrario eligio piedra";
    }else if(numAletorio === 2){
        document.getElementById("resultado").innerText = "Empate los dos elegieron papel";
    }else{
        document.getElementById("resultado").innerText = "Perdiste, el contrario elegio tijera";
    }
}
 function tijera(){
    createRandomNum();
    if(numAletorio === 1){
        document.getElementById("resultado").innerText = "Perdiste, el contrario elegio piedra";
    }else if(numAletorio === 2){
        document.getElementById("resultado").innerText = "Ganaste, el contrario eligio papel";
    }else{
        document.getElementById("resultado").innerText = "Empate los dos elegieron tijera";
    }
 }
