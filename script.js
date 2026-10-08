document.addEventListener("DOMContentLoaded", function () {
    let hint = document.getElementById("hint");
    let button = document.getElementById("Larry-button");
    let larry = document.getElementById("Larry1");

    let reveal = 0;

    let answer = confirm("Do you want to see Larry?");

    if (answer === true) {
        button.style.display = "block";
        hint.innerHTML = "Click the button to see Larry.";
    } else {
        button.style.display = "none";
        hint.innerHTML = "If you change your mind, please refresh the page (F5) and try again!";
    }

    button.addEventListener("click", function () {
        reveal += 10;

        if (reveal > 100) {
            reveal = 100;
        }

        larry.style.clipPath = `inset(0 0 ${100 - reveal}% 0)`;

        if (reveal < 100) {
            hint.innerHTML = `Larry is loading... (${reveal}%)`;
        } else {
            hint.innerHTML = "Larry is fully revealed!";
        }
    });
});