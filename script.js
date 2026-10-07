let answer = confirm( "Do you want to see Larry?" );
    if(answer == true) {
        document.getElementById("Larry-button").style.display = "block";
    }else {

    }

    let button = document.getElementById("Larry-button");
    let larry = document.getElementById("Larry1");
    
    let reveal = 0;
    
    button.addEventListener("click", function() {
        reveal += 10;
    
        larry.style.clipPath = `inset(0 0 ${100 - reveal}% 0)`;
    });