let info = document.getElementById("info-page");

let expandButtons = document.getElementsByClassName("expand-button");

let slide = function(event) {

    //Determines scroll direction and avoids case where wheelDelta is 0
    if (event.wheelDelta < 0) {
        info.style.top = "0";
        document.body.style.overflowY = "scroll";
    }

    else if (event.wheelDelta > 0 && window.pageYOffset == 0) {
        info.style.top = "100%";
        document.body.style.overflowY = "hidden";
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