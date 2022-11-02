//Animation starting - debuging purposes
function LoadAnimations(){
    elements = document.getElementsByClassName("animation-req");
    for(let i=0; i<elements.length; i++ ){
        elements[i].style.animation = "orbit"; 
    }
}

function ContentScreenToggler(numOfButton=0,isEnable=false){
    let body = document.getElementsByTagName("BODY")[0];
    let contentScreen = document.getElementsByClassName("content-screen");
    let contentCard = document.getElementsByClassName("content-card");

    if(isEnable == false){
        body.style.overflow = "unset";
        contentScreen[0].classList.add("d-none");
        contentScreen[0].classList.remove("d-block");
        contentCard[0].classList.add("d-none");
        contentCard[0].classList.remove("d-block");
    }

    if(isEnable == true){
        body.style.overflow = "hidden";
        contentScreen[0].classList.remove("d-none");
        contentScreen[0].classList.add("d-block");
        contentCard[0].classList.remove("d-none");
        contentCard[0].classList.add("d-block");
        ContentScreenCardSizing();
    }
}

function ContentScreenCardSizing(){
    let currentTopPosition = window.scrollY;
    let currentScreenSize = window.innerHeight;
    let contentScreenCard = document.getElementsByClassName("content-card")[0];
    let contentScreenTop = currentTopPosition+(0.2*currentScreenSize);
    contentScreenCard.style.top = contentScreenTop+'px';
}

function startUp(){
    LoadAnimations();
    ContentScreenToggler();
}