import { imageZombie1, imageZombie2, imageZombie3, imageZombie4, imageZombie5 } from "../../../js/Zombie.js";
import { timer, numRandom } from "../../../js/Utils.js";

let zombie1, zombie2, zombie3, zombie4, zombie5;
if (numRandom === 1){
    zombie1 = 3, zombie2 = 2, zombie3 = 1, zombie4 = 4, zombie5 = 5;
    imageZombie1.src = "../image/zombie-3.png";
    imageZombie2.src = "../image/zombie-2.png";
    imageZombie3.src = "../image/zombie-1.png";
    imageZombie4.src = "../image/zombie-4.png";
    imageZombie5.src = "../image/zombie-5.png";
}else if (numRandom === 2){
    zombie1 = 2, zombie2 = 5, zombie3 = 3, zombie4 = 1, zombie5 = 4;
    imageZombie1.src = "../image/zombie-4.png";
    imageZombie2.src = "../image/zombie-1.png";
    imageZombie3.src = "../image/zombie-3.png";
    imageZombie4.src = "../image/zombie-5.png";
    imageZombie5.src = "../image/zombie-2.png";
}else if (numRandom === 3) {
    zombie1 = 5, zombie2 = 3, zombie3 = 4, zombie4 = 2, zombie5 = 1;
    imageZombie1.src = "../image/zombie-5.png";
    imageZombie2.src = "../image/zombie-4.png";
    imageZombie3.src = "../image/zombie-2.png";
    imageZombie4.src = "../image/zombie-3.png";
    imageZombie5.src = "../image/zombie-1.png";
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
    const answerNum4 = document.getElementById("answer-input4").value;
    const answer4 = parseInt(answerNum4);
    const answerNum5 = document.getElementById("answer-input5").value;
    const answer5 = parseInt(answerNum5);
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

    if(answerNum4 === ""){
        alert("Esta vacio la respuesta 4")
    } else {
        if (answer4 === zombie4){
            alert("Acertaste")
        } else if (answer4 != zombie4){
            alert("Fallaste")
        }
    }
    if(answerNum5 === ""){
        alert("Esta vacio la respuesta 5")
    } else {
        if (answer5 === zombie5){
            alert("Acertaste")
        } else if (answer5 != zombie5){
            alert("Fallaste")
        }
    }
});
// Temporizador de 10 segundos
let timeNevelEasy = 10;

let timer30 = setInterval(() => {
    timer.textContent = `${timeNevelEasy}`
    timeNevelEasy--
    if (timeNevelEasy < 0){
        clearInterval(timer30)
        document.querySelector(".container-image").classList.toggle("disappear");
        document.querySelector(".answer").classList.toggle("answer-show")
    }
}, 1000);