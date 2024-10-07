let numRandom, tryNum = 1;
// Select element
const numberTry = document.getElementById("tryNumber");
const buttonSubmit = document.getElementById("submit");
const tip = document.getElementById("tip");

createRandomNum();

buttonSubmit.addEventListener("click", () => {
  const txtInput = document.getElementById("input1").value;
  const numInput = parseInt(txtInput);
  if (numInput < numRandom) {
    alert("El número Aleatorio es mayor que el numero ingresado");
    addTry();
  } else if (numInput > numRandom) {
    alert("El número Aleatorio es menor que el numero ingresado");
    addTry();
  } else if (numInput === numRandom) {
    alert("Adivinaste");
    tryNum = 0;
    createRandomNum();
    addTry();
  } else {
    alert("Ingrese un numero");
  }
});

function createRandomNum() {
  // random number
  numRandom = Math.floor(Math.random() * 100) + 1;
  console.log(numRandom);
}
function addTry() {
  numberTry.textContent = `${tryNum}`;
  tryNum += 1;
}
