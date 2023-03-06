'use strict';

/********* DARK/LIGHT THEME********** */
const themeBtn = document.querySelector(".fa-toggle-on");
const body = document.querySelector(".body")

themeBtn.addEventListener("click", showDarkTheme);

function showDarkTheme() {

    themeBtn.classList.toggle("fa-toggle-off");
    themeBtn.classList.toggle("fa-toggle-on");
    body.classList.toggle("body-light-theme")
    mainBtn.classList.toggle("gen-btn-light")
}

/************* EXERCISE *************** */

// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


/********** FUNCTIONS ********* */
function randomNum() {
    let num = Math.floor((Math.random() * 20) + 1);
    return num;
}

function numList () {
    for (let i = 0; i < 5; i++) {
        let numRand = randomNum();

        randomNumList.push(numRand);
        showInput[i].innerHTML = randomNumList[i];
    }
}
function changeText () {
    mainBtn.innerHTML = "Inserisci i numeri";
}

function askNum() {
    let userArray = [];

      for (let i = 0; i < 5; i++) {
        userArray.push(showUserInput[i].value)

          if (showInput[i].innerHTML.includes(userArray[i])) {
              alert("the number " + userArray[i] + " is right");
          } else {
            alert("the number " + userArray[i] + " is wrong");
          }  
      } 
}

/********** VARIABLES ********* */
const showInput = document.querySelectorAll(".input");
const showInputCtn = document.querySelector(".input-ctn");
const form = document.querySelector(".user-input-ctn");
const showUserInput = document.querySelectorAll(".user-input-ctn > .input");
const mainBtn = document.querySelector(".gen-btn")
const randomNumList = [];

mainBtn.addEventListener("click", () => {
    numList();
    showInputCtn.classList.add("none");
    form.reset();
    mainBtn.innerHTML = "When the numbers disappear, Write them below";
})
/********** TIMERS ********* */
setTimeout(askNum, 30000);
