//Animation starting - debuging purposes
function LoadAnimations(){
    elements = document.getElementsByClassName("animation-req");
    for(let i=0; i<elements.length; i++ ){
        elements[i].style.animation = "orbit"; 
    }
}

function ClickHandler(){

}

function ContentScreenToggler(isEnable=false){
    let body = document.getElementsByTagName("BODY")[0];
    let contentScreen = document.getElementsByClassName("content-screen");

    if(isEnable == false){
        body.style.overflow = "unset";
        contentScreen[0].classList.add("d-none");
    }

    if(isEnable == true){
        body.style.overflow = "hidden";
        contentScreen[0].classList.add("d-block");
    }
}