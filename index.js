let homescoreEl = document.getElementById("homescore");
let guestscoreEl = document.getElementById("guestscore");


function homeOne(){
    homescoreEl.textContent = Number(homescoreEl.textContent)+1;
}

function homeTwo() {
    homescoreEl.textContent = Number(homescoreEl.textContent) + 2;
}

function homeThree(){
    homescoreEl.textContent = Number(homescoreEl.textContent)+3;
}


function guestOne(){
    guestscoreEl.textContent = Number(guestscoreEl.textContent)+1;
}

function guestTwo(){
    guestscoreEl.textContent = Number(guestscoreEl.textContent)+2;
}

function guestThree(){
    guestscoreEl.textContent = Number(guestscoreEl.textContent)+3;
}


function resetGame(){
    guestscoreEl.textContent = 0;
    homescoreEl.textContent = 0;
}