let info = document.getElementById("info-page");

let expandButtons = document.getElementsByClassName("expand-button");

let slide = function(event) {

    //Determines scroll direction and avoids case where wheelDelta is 0
    if (event.wheelDelta < 0) {
        info.style.top = "0";
    }

    else if (event.wheelDelta > 0) {
        info.style.top = "100%";
    }
}

let focusContent = function(event) {

    if (event.target.parentNode.parentNode.className == "expanded") {
        event.target.parentNode.parentNode.className = "";
        event.target.src = "./resources/expand.png";
        document.getElementsByClassName("hidden-photo")[0].classList.remove("reveal-photo");
    }
    else{
        event.target.parentNode.parentNode.className = "expanded";
        event.target.src = "./resources/compress.png";
        document.getElementsByClassName("hidden-photo")[0].classList.add("reveal-photo");
        console.log(document.getElementsByClassName("hidden-photo")[0]);
    }
}

document.addEventListener("wheel", slide);

document.addEventListener("wheel", slide);

for(let i = 0; i < expandButtons.length; i++) {
    expandButtons[i].addEventListener("click", focusContent);
}

document.addEventListener("mouseover", makeVisible);