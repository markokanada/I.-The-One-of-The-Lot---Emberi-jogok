//Animation starting - debuging purposes
function LoadAnimations(){
    elements = document.getElementsByClassName("animation-req");
    for(let i=0; i<elements.length; i++ ){
        elements[i].style.animation = "orbit"; 
    }
}