// Seleccionando el temporizador que es un parrafo
const timer = document.getElementById("timer");
// Seleccionando imagen
const imageZombie1 = document.getElementById("image-zombie1");
const imageZombie2 = document.getElementById("image-zombie2");
const imageZombie3 = document.getElementById("image-zombie3");

// Agrega aleatoridad a las imagenes que aparecen
const numRandom = Math.floor(Math.random() * 3) + 1;
let zombie1, zombie2, zombie3;
if (numRandom === 1){
    zombie1 = 3;
    zombie2 = 2;
    zombie3 = 1;
    imageZombie1.src = "../image/zombie-3.png";
    imageZombie2.src = "../image/zombie-2.png";
    imageZombie3.src = "../image/zombie-1.png";
}else if (numRandom === 2){
    zombie1 = 2;
    zombie2 = 1;
    zombie3 = 3;
    imageZombie1.src = "../image/zombie-2.png";
    imageZombie2.src = "../image/zombie-1.png";
    imageZombie3.src = "../image/zombie-3.png";
}else if (numRandom === 3) {
    zombie1 = 1;
    zombie2 = 3;
    zombie3 = 2;
    imageZombie1.src = "../image/zombie-1.png";
    imageZombie2.src = "../image/zombie-3.png";
    imageZombie3.src = "../image/zombie-2.png";
}

// Recibir las respuestas
const buttonSubmit = document.getElementById("button-submit");

buttonSubmit.addEventListener("click", () => {
    // Seleccionando respuestas
    const answerNum1 = document.getElementById("answer-input1").value;
    const answer1 = parseInt(answerNum1);
    const answerNum2 = document.getElementById("answer-input2").value; 
    const answer2 = parseInt(answerNum2);
    const answerNum3 = document.getElementById("answer-input3").value;
    const answer3 = parseInt(answerNum3);
    // Validar si el campo esta vacio o si la respuesta es correcta o incorrecta
    if(answerNum1 === ""){
        alert("Esta vacio la respuesta 1")
    } else {
        if (answer1 === zombie1){
            alert("Acertaste")
        } else if (answer1 != zombie1){
            alert("Fallaste")
        }
    }

    if(answerNum2 === ""){
        alert("Esta vacio la respuesta 2")
    } else {
        if (answer2 === zombie2){
            alert("Acertaste")
        } else if (answer2 != zombie2){
            alert("Fallaste")
        }
    }
    if(answerNum3 === ""){
        alert("Esta vacio la respuesta 3")
    } else {
        if (answer3 === zombie3){
            alert("Acertaste")
        } else if (answer3 != zombie3){
            alert("Fallaste")
        }
    }
});
// Temporizador de 30 segundos
let timeNevelEasy = 30

let timer30 = setInterval(() => {
    timer.textContent = `${timeNevelEasy}`
    timeNevelEasy--
    if (timeNevelEasy < 0){
        clearInterval(timer30)
        const image = document.querySelector(".container-image").classList.toggle("disappear");
        const answer = document.querySelector(".answer").classList.toggle("answer-show")
        document.getElementById("title-remember-image").classList.toggle("disappear");
    }
}, 1000);