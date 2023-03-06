'use strict';

/********* DARK/LIGHT THEME********** */
const themeBtn = document.querySelector(".fa-toggle-on");
const body = document.querySelector(".body")

themeBtn.addEventListener("click", showDarkTheme);

function showDarkTheme() {

    themeBtn.classList.toggle("fa-toggle-off");
    themeBtn.classList.toggle("fa-toggle-on");
    body.classList.toggle("body-light-theme")
}

/************* EXERCISE *************** */