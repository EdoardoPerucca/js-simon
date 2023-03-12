/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei 
numeri da indovinare sono stati individuati.
*/

/* 
- Creare ciclo random con 5 numeri casuali.
- Imposto timer di 10 sec
- Dopo 10 secondi i numeri scompaiono 
- l'utente deve inserire i numeri che ha visto precedentemente
- Dopo aver inserito i 5 numeri, indicare quanti e quali numeri sono stati indovinati
*/ 

const startButtonEl = document.getElementById('start-button');
const secretNumbersEl = document.getElementById("secretNumbers");
const inputElementContainer = document.getElementById('inputElementsContainer');
const outputTextEl = document.getElementById("outputText");
const checkButton = document.getElementById("check");
const randomNumbersArray = createRandomNumbers(5);


// creo array di input
const numberEl = [
  document.getElementById("number-1"),
  document.getElementById("number-2"),
  document.getElementById("number-3"),
  document.getElementById("number-4"),
  document.getElementById("number-5")
];


startButtonEl.addEventListener('click', function() {

    
    // stampo in pagina
    secretNumbersEl.innerText = randomNumbersArray;
    
    // parte il timer di 10 secondi.
    // Dopo 10 secondi i numeri scompaiono 
    setTimeout(function() {
      
      disappearNumbers(secretNumbersEl);
    
      inputElementContainer.style.display = "block";
    
    }, 3000);
});




// il software dice quanti e quali numeri sono stati indovinati.

checkButton.addEventListener("click", function() {

  let rightNumbersArray = checkNumbers(randomNumbersArray, numberEl);

  endGame(rightNumbersArray, outputTextEl);

});






// ------------------ FUNCTIONS -----------------------



function endGame(rightNumbers, outputEl) {

  // stampa quanti numeri ha indovinato l'utente
  outputEl.innerHTML = `
  Hai indovinato ${rightNumbers.length} numeri.<br>
  I numeri che hai indovinato sono: ${rightNumbers}`;

}



// Restituisce un array dei numeri che l'utente ha indovinato

function checkNumbers(secretNumbers, userNumbers) {
  
  const rightNumbers = [];

 

  for(let i = 0; i < userNumbers.length; i++) {

    if(secretNumbers[i] == userNumbers[i].value) {
      
      rightNumbers.push(secretNumbers[i]);

      userNumbers[i].style.backgroundColor = "green";

    }
    
  }

  return rightNumbers;

}


// funzione per far sparire i numeri random
function disappearNumbers(numbersContainer) {
  numbersContainer.innerText = "Ora tocca a te, ti ricordi i numeri?";
}


// crea numeri random
function createRandomNumbers(quantity) {
  let randomNumbers = [];

  for(let i = 0; i < quantity; i++) {
    randomNumbers.push(randomNumberBetween(1, 10));
  }

  return randomNumbers;

}



// restituisce un numero intero random dal min al max
function randomNumberBetween(min, max) {

  let random = Math.floor(Math.random() * (max - min + 1) + min)

  return random;

}



