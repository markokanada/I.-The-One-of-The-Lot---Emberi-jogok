//Animation starting - debuging purposes
function LoadAnimations(){
    elements = document.getElementsByClassName("animation-req");
    for(let i=0; i<elements.length; i++ ){
        elements[i].style.animation = "orbit"; 
    }
}

function ContentScreenToggler(numOfButton,isEnable=false){
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
        ContentScreenPositioning()
        ContentCardContentPlacing(numOfButton);
    }
}

function ContentScreenCardSizing(){
    let currentTopPosition = window.scrollY;
    let currentScreenSize = window.innerHeight;
    let contentScreenCard = document.getElementsByClassName("content-card")[0];
    let contentScreenTop = currentTopPosition+(0.15*currentScreenSize);
    contentScreenCard.style.top = contentScreenTop+'px';
}

function ContentScreenPositioning(){
    let contentScreen = document.getElementsByClassName("content-screen")[0];
    let currentTopPosition = window.scrollY;
    contentScreen.style.top = currentTopPosition+'px';
}

function ContentCardContentPlacing(numOfCard){
    let contentPlace = document.getElementById("content");
    let imagePlace = document.getElementById("content-image");
    let h2 = "";
    let ulElements = [];
    let p = "";
    if(numOfCard==1){
        h2 = "2. cikk"
        p = "A jelen nyilatkozatban kinyilvánított összes jogok és szabadságok fajra, színre, nemre, nyelvre, vallásra, politikai vagy más véleményre, nemzeti vagy társadalmi származásra, vagyonra, születésre vagy más körülményre vonatkozó mindennemű megkülönböztetés nélkül mindenkit megilletnek. Ezenfelül nem lehet semmiféle megkülönböztetést tenni annak az országnak vagy területnek a politikai, jogi vagy nemzetközi helyzete alapján sem, amelynek a személy állampolgára, aszerint, hogy az illető ország vagy terület független, gyámság alatt áll, nem autonóm vagy szuverenitása bármely vonatkozásban korlátozott.";
    }

    if(numOfCard==2){
        h2 = "7. cikk"
        p = "A törvény előtt mindenki egyenlő, és minden megkülönböztetés nélkül joga van a törvény egyenlő védelméhez. Mindenkit egyenlő védelem illet meg a jelen Nyilatkozatot sértő minden megkülönböztetéssel és minden ilyen megkülönböztetésre irányuló felbujtással szemben.";
    }

    if(numOfCard=="3"){
        h2 = "8. cikk"
        p = "Minden személynek joga van az alkotmányban vagy a törvényben részére biztosított alapvető jogokat sértő eljárások ellen az illetékes hazai bíróságokhoz tényleges jogorvoslatért folyamodni.";
    }
    if(numOfCard==4){
        h2 = "12. cikk"
        p = "Senkinek magánéletébe, családi ügyeibe, otthonába vagy levelezésébe nem szabad önkényesen beavatkozni, sem pedig becsületében vagy jó hírnevében megsérteni. Minden személynek joga van az ilyen beavatkozásokkal vagy sértésekkel szemben a törvény védelméhez.";
    }
    if(numOfCard==5){
        h2 = "16. cikk"
        ulElements = ["Mind a férfinak, mind a nőnek a nagykorúság elérésétől kezdve joga van fajon, nemzetiségen vagy valláson alapuló korlátozás nélkül házasságot kötni és családot alapítani. A házasság tekintetében a férfinak és a nőnek mind a házasság tartama alatt, mind a házasság felbontása tekintetében egyenlő jogai vannak.","Házasságot csak a jövendő házastársak szabad és teljes beleegyezésével lehet kötni.","A család a társadalom természetes és alapvető alkotóeleme, és joga van a társadalom, valamint az állam védelmére."]
    }
    if(numOfCard==6){
        h2 = "23. cikk"
        ulElements = ["Minden személynek joga van a munkához, a munka szabad megválasztásához, a méltányos és kielégítő munkafeltételekhez és a munkanélküliség elleni védelemhez.","Mindenkinek joga van egyenlő munkáért egyenlő bért kapni, bárminemű megkülönböztetés nélkül.","Mindenkinek, aki dolgozik, olyan méltányos és kielégítő fizetéshez van joga, amely számára és családja számára az emberi méltóságnak megfelelő megélhetést biztosít, és amelyet szükség esetén a szociális védelem összes egyéb eszközei egészítenek ki.","Minden személynek joga van, hogy érdekeinek védelme céljából másokkal együtt szakszervezet alapítson vagy szakszervezethez csatlakozzon."]
    }

    let innerHtml = '<h2>'+h2+'</h2>'+'<ul>';
    if(ulElements.length > 0){
        for(let i=0;i<ulElements.length; i++){
            innerHtml = innerHtml + '<li>' +ulElements[i]+'</li>';
        }
        contentPlace.innerHTML= innerHtml + '</ul>';
    }

    else{
        contentPlace.innerHTML='<h2>'+h2+'</h2>'+'<p>'+p+'</p>';
    }

 
}

function startUp(){
    LoadAnimations();
    ContentScreenToggler();
}