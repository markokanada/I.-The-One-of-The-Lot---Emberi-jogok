//Animation starting - debuging purposes
function LoadAnimations() {
  elements = document.getElementsByClassName("animation-req");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.animation = "orbit";
  }
}

function ContentScreenToggler(numOfButton, isEnable = false) {
  let body = document.getElementsByTagName("BODY")[0];
  let contentScreen = document.getElementsByClassName("content-screen");
  let contentCard = document.getElementsByClassName("content-card");

  if (isEnable == false) {
    body.style.overflow = "unset";
    contentScreen[0].classList.add("d-none");
    contentScreen[0].classList.remove("d-block");
    contentCard[0].classList.add("d-none");
    contentCard[0].classList.remove("d-block");
  }

  if (isEnable == true) {
    body.style.overflow = "hidden";
    contentScreen[0].classList.remove("d-none");
    contentScreen[0].classList.add("d-block");
    contentCard[0].classList.remove("d-none");
    contentCard[0].classList.add("d-block");
    ContentScreenCardSizing();
    ContentScreenPositioning();
    ContentCardContentPlacing(numOfButton);
  }
}

function ContentScreenCardSizing() {
  let currentTopPosition = window.scrollY;
  let currentScreenSize = window.innerHeight;
  let contentScreenCard = document.getElementsByClassName("content-card")[0];
  let contentScreenTop = currentTopPosition + 0.15 * currentScreenSize;
  contentScreenCard.style.top = contentScreenTop + "px";
}

function ContentScreenPositioning() {
  let contentScreen = document.getElementsByClassName("content-screen")[0];
  let currentTopPosition = window.scrollY;
  contentScreen.style.top = currentTopPosition + "px";
}

function ContentCardContentPlacing(numOfCard) {
  let contentPlace = document.getElementById("content");
  let imagePlace = document.getElementById("content-image");
  let h2 = "";
  let ulElements = [];
  let p = "";
  let img = "";
  if (numOfCard == 1) {
    h2 = "2. cikk";
    p =
      "A jelen nyilatkozatban kinyilvánított összes jogok és szabadságok fajra, színre, nemre, nyelvre, vallásra, politikai vagy más véleményre, nemzeti vagy társadalmi származásra, vagyonra, születésre vagy más körülményre vonatkozó mindennemű megkülönböztetés nélkül mindenkit megilletnek. Ezenfelül nem lehet semmiféle megkülönböztetést tenni annak az országnak vagy területnek a politikai, jogi vagy nemzetközi helyzete alapján sem, amelynek a személy állampolgára, aszerint, hogy az illető ország vagy terület független, gyámság alatt áll, nem autonóm vagy szuverenitása bármely vonatkozásban korlátozott. "
    img = ".IMG/2.cikk.jpg";
  }

  if (numOfCard == 2) {
    h2 = "3. cikk";
    p =
      "Minden személynek joga van az élethez, a szabadsághoz és a személyi biztonsághoz.";
    img = "IMG/7.cikk.jpg";
  }

  if (numOfCard == "3") {
    h2 = "7. cikk";
    p =
      "A törvény előtt mindenki egyenlő, és minden megkülönböztetés nélkül joga van a törvény egyenlő védelméhez. Mindenkit egyenlő védelem illet meg a jelen Nyilatkozatot sértő minden megkülönböztetéssel és minden ilyen megkülönböztetésre irányuló felbujtással szemben.";
    img = "IMG/7.cikk.jpg";
  }
  if (numOfCard == 4) {
    h2 = "12. cikk";
    p =
      "Senkinek magánéletébe, családi ügyeibe, otthonába vagy levelezésébe nem szabad önkényesen beavatkozni, sem pedig becsületében vagy jó hírnevében megsérteni. Minden személynek joga van az ilyen beavatkozásokkal vagy sértésekkel szemben a törvény védelméhez.";
    img = "IMG/12.cikk.jpg";
  }
  if (numOfCard == 5) {
    h2 = "16. cikk";
    ulElements = [
      "Mind a férfinak, mind a nőnek a nagykorúság elérésétől kezdve joga van fajon, nemzetiségen vagy valláson alapuló korlátozás nélkül házasságot kötni és családot alapítani. A házasság tekintetében a férfinak és a nőnek mind a házasság tartama alatt, mind a házasság felbontása tekintetében egyenlő jogai vannak.",
      "Házasságot csak a jövendő házastársak szabad és teljes beleegyezésével lehet kötni.",
      "A család a társadalom természetes és alapvető alkotóeleme, és joga van a társadalom, valamint az állam védelmére.",
    ];
    img = "IMG/16.cikk.jpg";
  }
  if (numOfCard == 6) {
    h2 = "23. cikk";
    ulElements = [
      "Minden személynek joga van a munkához, a munka szabad megválasztásához, a méltányos és kielégítő munkafeltételekhez és a munkanélküliség elleni védelemhez.",
      "Mindenkinek joga van egyenlő munkáért egyenlő bért kapni, bárminemű megkülönböztetés nélkül.",
      "Mindenkinek, aki dolgozik, olyan méltányos és kielégítő fizetéshez van joga, amely számára és családja számára az emberi méltóságnak megfelelő megélhetést biztosít, és amelyet szükség esetén a szociális védelem összes egyéb eszközei egészítenek ki.",
      "Minden személynek joga van, hogy érdekeinek védelme céljából másokkal együtt szakszervezet alapítson vagy szakszervezethez csatlakozzon.",
    ];
    img = "IMG/23.cikk.jpg";
  }
  // history map
  if (numOfCard == 7) {
    h2 = "23. cikk";
    p = "";
    img = "../IMG/23.cikk.jpg";
  }
  if (numOfCard == 8) {
    h2 = "23. cikk";
    p = "";
    img = "../IMG/23.cikk.jpg";
  }
  if (numOfCard == 9) {
    h2 = "23. cikk";
    p = "";
    img = "../IMG/23.cikk.jpg";
  }
  if (numOfCard == 10) {
    h2 = "16. cikk";
    p = "Sajnos hiába minden erőfeszítés a háborúk okozta éhezés és nyomorgás sokszor arra kényszeríti a társadalmakat, hogy nehéz néha komoly erkölcsi aggályokat magával vonó döntéseket hozni, amelyek persze sokszor az ENSZ Emberi Jogi Nyilatkozatának sem felelnek meg. Ezekben a helyzetekben sajnálatos módon nem lehet semmilyen rendelettel vagy az adott kormány felelőségre vonásával helyre állítani az emberi jogokat, hiszen nem egy törvény vagy rendelet sérti meg azokat, hanem az civilek kényszerülnek olyan helyzetbe amikor életben maradásuk érdekében olyan döntéseket kell hozniuk, amivel megsértik a polgártársaik sokszor családtagjaik jogait. Ez a helyzet Afganisztánban is, ahol a hosszú évek óta tartó harcok miatt a nyomorgásban élő családoknak olyan drasztikus lépéseket kell tennie, mint például, hogy saját gyermekeiket pénzért cserébe eladják feleségnek. Tisztán látható, hogy ebben az esetben az emberek szorulnak, olyan helyzetbe, hogy egymás jogait sértik meg. Ez az egyik legszomorúbb helyzet, mert nehéz rajta változtatni. Itt az egyetlen megoldás a háborúk elkerülése és a háború sújtotta országok mihamarabbi újjá építése. Az ENSZ különböző szervezetei ebben is segítenek.";
    img = "../IMG/16.cikk.jpg";
  }
  if (numOfCard == 11) {
    h2 = "7. cikk";
    p = "A nem rég kezdődő Katar által rendezett labdarugó világbajnokság kapcsán egyre többször merültek fel a rendező ország emberi jogokhoz való viszonya miatt kétségeket felvető hangok. Az olaj tartalékjai miatt, komoly piaci szerepet betöltő apró ország jogai nem túlzóan támogatja a különböző heteroszexuálistól éltérő nemi irányultságokkal rendelkező személyeket és emellett a nők jogait is erősen korlátozzák, a külföldről érkező vendégmunkásokkal szemben milyen bánásmódot enged meg az ország jog alkotása még szó sem esett. A katari helyzet sajnos elég sok sebből vérzik és hiába tagja az ENSZ-nek Katar nem túl sok a változás. Azáltal, hogy az említett csoportok képviselőit nem kapnak meg minden őket illető jogot, így a törvény előtt sem tekinthetők egyenlőnek. Reméljük Katar is hamarosan ráeszmél, hogy ideje felülvizsgálnia, hogy mi a jó és mi a rossz számukra.";
    img = "../IMG/7.cikk.jpg";
  }
  if (numOfCard == 12) {
    h2 = "23. cikk";
    p = "";
    img = "../IMG/23.cikk.jpg";
  }
  let buttons =
    '<div class="auto-align-dom"><button type="button" class="auto-align-button auto-align btn btn-outline-info px-3 mx-3 float-start"><a class="text-decoration-none  text-dark" href="https://www.coe.int/hu/web/compass/the-universal-declaration-of-human-rights-full-version-">Forrás</a></button></div>' +
    '<div class="auto-align-dom"><button type="button" class="auto-align-button auto-align btn btn-outline-primary px-3 mx-3 float-end"><a class="text-decoration-none  text-dark" href="HTML/side2.html">Tovább a térképhez</a></button></div>';
  let innerHtml =
    "<h2 class='auto-align-h2'>" + h2 + "</h2>" + "<ul class='auto-align-ul'>";
  if (ulElements.length > 0) {
    for (let i = 0; i < ulElements.length; i++) {
      innerHtml = innerHtml + "<li>" + ulElements[i] + "</li>";
    }
    contentPlace.innerHTML = innerHtml + "</ul>" + buttons;
  } else {
    contentPlace.innerHTML =
      "<h2 class='auto-align-h2'>" +
      h2 +
      "</h2 >" +
      '<p class="text-justify auto-align auto-align-p">' +
      p +
      "</p>" +
      buttons;
  }
  imagePlace.innerHTML = '<img class="img-fluid d-block" src="' + img + '">';

  autoAlignment(true);
}

function outClicking() {
  ContentScreenToggler(0, false);
}

function afterTro(ver) {
  let dom = document.getElementsByClassName("dom")[0];
  let intro = document.getElementsByClassName("animation-body")[0];
  dom.classList.remove("d-none");
  dom.classList.add("d-block");
  intro.classList.add("d-none");
  if (ver != 1) {
    const int = setInterval(blurring, 15);
  }
  let load = 0;

  function blurring() {
    let bg = document.getElementsByClassName("dom")[0];
    bg.style.filter = "blur 15px";
    load++;

    if (load > 99) {
      clearInterval(int);
    }

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  }
  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

  function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  let body = document.getElementsByClassName("main")[0];
  body.style.backgroundImage = "linear-gradient(#2a3e4d, #255c72)";
}

function autoAlignment(isTheAligmentFromContentCard) {
  let doms = document.getElementsByClassName("auto-align-dom");
  let alignables = document.getElementsByClassName("auto-align");
  let button = document.getElementsByClassName("auto-align-button")[0];
  let h2 = document.getElementsByClassName("auto-align-h2")[0];
  let screen = window.innerWidth;
  let numberOfAlignables = alignables.length;
  //let maxWidth = 0
  let maxHeight = 0;
  let currentHeight = 0;
  //let currentWidth = 0
  let defaultSize = 0;
  let newSize = 0;
  let isDone = false;

  if (isTheAligmentFromContentCard) {
    for (let i = 0; i < numberOfAlignables; i++) {
      if (alignables[i].classList.contains("auto-align-p")) {
        let h2Size = Math.ceil(h2.offsetHeight) + 1;
        let buttonSize = button.offsetHeight;
        //maxWidth = doms[i].offsetWidth;
        maxHeight = doms[i].offsetHeight;
        isDone = false;
        defaultSize = window.getComputedStyle(alignables[i]).fontSize + ".";
        newSize = defaultSize.slice(0, defaultSize.indexOf("px"));
        while (isDone == false) {
          currentHeight = alignables[i].offsetHeight;
          //currentWidth = alignables[i].offsetWidth;
          //console.log({"i":i,"isdone":isDone,"currentHeight":currentHeight,"maxHeight":maxHeight,"newSize":newSize,"maxHeightCalc":(maxHeight - 20 - h2Size - buttonSize),"h2Size":h2Size,"buttonSize":buttonSize})

          if (currentHeight > maxHeight - 20 - h2Size - buttonSize) {
            newSize = newSize - 1;
            isDone = false;
          }

          if (currentHeight <= maxHeight - 20 - h2Size - buttonSize) {
            isDone = true;
          }
          alignables[i].style.fontSize = newSize + "px";
        }
      }

      if (alignables[i].classList.contains("auto-align-div")) {
        fullWidth = screen - (screen / 10) * 2;
        marginSize = (screen / 10) * 2;
        alignables[i].style.width = fullWidth + "px";
        alignables[i].style.left = marginSize / 2 + "px";
        alignables[i].style.display = "inline-block";
      }

      if (i != numberOfAlignables - 1) {
        if (
          alignables[i].classList.contains("auto-align-button") &&
          alignables[i + 1].classList.contains("auto-align-button")
        ) {
          maxWidth = doms[i].offsetWidth;
          isDone = false;
          defaultSize = window.getComputedStyle(alignables[i]).fontSize + ".";
          newSize = defaultSize.slice(0, defaultSize.indexOf("px"));
          while (isDone == false) {
            //currentHeight = alignables[i].offsetHeight;
            currentWidth =
              alignables[i].offsetWidth + alignables[i + 1].offsetWidth;

            if (currentWidth > maxWidth - 20) {
              newSize = newSize - 1;
              isDone = false;
            }

            if (currentWidth <= maxWidth - 20) {
              isDone = true;
            }
            alignables[i].style.fontSize = newSize + "px";
            alignables[i + 1].style.fontSize = newSize + "px";
          }
          if (
            typeof document.getElementsByClassName("auto-align-ul")[0] !=
            "undefined"
          ) {
            size =
              document.getElementsByClassName("auto-align-ul")[0].offsetHeight;
          }
          if (
            typeof document.getElementsByClassName("auto-align-p")[0] !=
            "undefined"
          ) {
            size =
              document.getElementsByClassName("auto-align-p")[0].offsetHeight;
          }

          maxHeight =
            document.getElementsByClassName("content-card")[0].offsetHeight;
          currentButtonSize = alignables[i].offsetHeight;
          /*console.log({
            Size: size,
            marginValue: maxHeight - maxHeight / 10 - currentButtonSize + "px",
            currentButtonSize: currentButtonSize,
            maxHeight: maxHeight,
          });*/
          alignables[i].style.marginTop =
            maxHeight - maxHeight / 8 - currentButtonSize - size + "px";
          alignables[i + 1].style.marginTop =
            maxHeight - maxHeight / 8 - currentButtonSize - size + "px";
        }
      }
      /*
    if (alignables[i].classList.contains("auto-align-h2")) {
      maxHeight = doms[i].offsetHeight;
      maxWidth = doms[i].offsetWidth;
      isDone = false;
      defaultSize = window.getComputedStyle(alignables[i]).fontSize + ".";
      newSize = defaultSize.slice(0, defaultSize.indexOf("px"));
      while (isDone == false) {
        currentHeight = alignables[i].offsetHeight;
        currentWidth = alignables[i].offsetWidth;

        if (currentWidth > maxWidth || currentHeight > maxHeight - 20) {
          newSize = newSize - 1;
          isDone = false;
        }

        if (currentWidth <= maxWidth - 20 && currentHeight <= maxHeight - 20) {
          isDone = true;
        }
        alignables[i].style.fontSize = newSize + "px";
      }
    }
    */
    }
  } else if (!isTheAligmentFromContentCard) {
    for (let i = 0; i < numberOfAlignables; i++) {
      if (alignables[i].classList.contains("auto-align-div")) {
        fullWidth = screen - (screen / 10) * 2;
        marginSize = (screen / 10) * 2;
        alignables[i].style.width = fullWidth + "px";
        alignables[i].style.left = marginSize / 2 + "px";
        alignables[i].style.display = "inline-block";
      }
      if (alignables[i].classList.contains("auto-align-div-height")) {
        row = alignables[i].closest(".parent");
        alignableHeight = alignables[i].offsetHeight;
        rowHeight = row.offsetHeight;
        alignables[i].style.marginTop =
          (rowHeight - alignableHeight) / 2 + "px";
      }
    }
  }
}

function beforeTro() {
  animation = document.getElementsByClassName("animation-body")[0];
  animation.innerHTML = `    <div class="animation">
  <div class="sp-container">
  <div class="sp-content auto-align-dom">
    <h2 class="frame-1 auto-align auto-align-h2">Üdvözöljük</h2>
  </div>
  <div class="sp-content auto-align-dom">
    <h2 class="frame-2 auto-align auto-align-h2">A The One of The Lot</h2>
  </div>
  <div class="sp-content auto-align-dom">
    <h2 class="frame-3 auto-align auto-align-h2">
      Emberi jogokat feldolgozó oldalán!
    </h2>
  </div>
  <div class="sp-content auto-align-dom">
    <h2 class="frame-4 auto-align auto-align-h2">Jó szórakozást!</h2>
  </div>
  <div class="sp-content auto-align-dom">
    <h2 class="frame-5 auto-align auto-align-h2">
      <span>1,</span>
      <span>2,</span>
      <span>3.</span>
    </h2>
  </div>
</div></div>`;
  body = document.getElementsByClassName("main")[0];
  body.setAttribute(
    "style",
    "background: #310404 no-repeat center center fixed;"
  );
}

function toast() {
  let toastElList = [].slice.call(document.querySelectorAll(".toast"));
  let toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });
  toastList[0].show();
}

function startUp(ver) {
  if (ver == 1) {
    LoadAnimations();
    ContentScreenToggler();

    autoAlignment(false);
    if (!localStorage.getItem("visited")) {
      beforeTro();
      setTimeout(afterTro, 16500);
      localStorage.setItem("visited", true);
    } else {
      afterTro(1);
    }
    toast();
  }
  if (ver == 2) {
    ContentScreenToggler();
    autoAlignment(false);
    map_sizer();
  }

  if (ver == 3) {
    autoAlignment(false);
  }
}

function map_sizer() {
  var w = window.innerWidth;

  if (w <= 500) {
    map = document.getElementsByClassName("map-big")[0];
    map.setAttribute("style", "display: none");
    map2 = document.getElementsByClassName("map-small")[0];
    map2.setAttribute("style", "display: flex");
  } else {
    map = document.getElementsByClassName("map-big")[0];
    map.setAttribute("style", "display: flex");
    map2 = document.getElementsByClassName("map-small")[0];
    map2.setAttribute("style", "display: none");
  }
}
