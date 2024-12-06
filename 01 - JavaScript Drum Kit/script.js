const keys = document.querySelector(".keys")
const keyNodeList = document.querySelectorAll(".key")
const keyArray = Array.from(keyNodeList)
const audioNodes = document.querySelectorAll("audio")
const audioArray = Array.from(audioNodes)

const elementA = document.querySelector("[data-key='65']")
  const elementS = document.querySelector("[data-key='83']")
    const elementD = document.querySelector("[data-key='68']")
      const elementF = document.querySelector("[data-key='70']")
        const elementG = document.querySelector("[data-key='71']")
          const elementH = document.querySelector("[data-key='72']")
            const elementJ = document.querySelector("[data-key='74']")
              const elementK = document.querySelector("[data-key='75']")
                const elementL = document.querySelector("[data-key='76']")


const sound = new Audio()

const playSound = (id) => {
const key = audioArray.find((key) => key.id === id);
sound.src = key.src;
sound.play();
}


const soundClap = document.getElementById("65")
const soundHiHat = document.getElementById("83")
const soundKick = document.getElementById("68")
const soundOpenHat = document.getElementById("70")
const soundBoom = document.getElementById("71")
const soundRide = document.getElementById("72")
const soundSnare = document.getElementById("74")
const soundTom = document.getElementById("75")
const soundTik = document.getElementById("76")


document.addEventListener(
  "keydown", 
  (e) => {
    const keyValue = e.keyCode;
    if (keyValue === 65) {
  elementA.setAttribute("style", 
                        "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
  soundClap.play()
  function resetButton() {
    elementA.removeAttribute("style")
  };
  setTimeout(resetButton, 500);
  elementA.setAttribute("style", 
    "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;");
  }
});   
// <-------seperator-------->
document.addEventListener(
  "keydown", 
  (e) => {
    const keyValue = e.keyCode;
    if (keyValue === 83) {
  elementS.setAttribute("style", 
                        "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;");
  soundHiHat.play();
  function resetButton() {
    elementS.removeAttribute("style")
  };
  setTimeout(resetButton, 500);
  elementS.setAttribute("style", 
    "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;");
  }
});
// <-------seperator-------->
document.addEventListener(
  "keydown", 
  (e) => {
    const keyValue = e.keyCode;
    if (keyValue === 68) {
  elementD.setAttribute("style", 
                        "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
  soundKick.play();
  function resetButton() {
    elementD.removeAttribute("style")
  };
  setTimeout(resetButton, 500);
  elementD.setAttribute("style", 
    "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;");
  }
});
// <-------seperator-------->
document.addEventListener(
  "keydown", 
  (e) => {
    const keyValue = e.keyCode;
    if (keyValue === 70) {
  elementF.setAttribute("style", 
                        "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
  soundOpenHat.play();
  function resetButton() {
    elementF.removeAttribute("style")
  };
  setTimeout(resetButton, 500);
  elementF.setAttribute("style", 
    "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;");
    }
});
// <-------seperator-------->
document.addEventListener(
  "keydown", 
  (e) => {
    const keyValue = e.keyCode;
    if (keyValue === 71) {
  elementG.setAttribute("style", 
                        "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
  soundBoom.play();
  function resetButton() {
    elementG.removeAttribute("style")
  };
  setTimeout(resetButton, 500);
  elementG.setAttribute("style", 
    "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;");
  }
});
// <-------seperator-------->
document.addEventListener(
  "keydown", 
  (e) => {
    const keyValue = e.keyCode;
    if (keyValue === 72) {
  elementH.setAttribute("style", 
                        "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
  soundRide.play();
    function resetButton() {
    elementH.removeAttribute("style")
  };
  setTimeout(resetButton, 500);
  elementH.setAttribute("style", 
    "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;");
  }
});
// <-------seperator-------->
document.addEventListener(
  "keydown", 
  (e) => {
    const keyValue = e.keyCode;
    if (keyValue === 74) {
  elementJ.setAttribute("style", 
                        "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
  soundSnare.play();
    function resetButton() {
    elementJ.removeAttribute("style")
  };
  setTimeout(resetButton, 500);
  elementJ.setAttribute("style", 
    "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;");
  }
});
// <-------seperator-------->
document.addEventListener(
  "keydown", 
  (e) => {
    const keyValue = e.keyCode;
    if (keyValue === 75) {
  elementK.setAttribute("style", 
                        "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
  soundTom.play();
    function resetButton() {
    elementK.removeAttribute("style")
  };
  setTimeout(resetButton, 500);
  elementK.setAttribute("style", 
    "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;");
  }
});
// <-------seperator-------->
document.addEventListener(
  "keydown", 
  (e) => {
    const keyValue = e.keyCode;
    if (keyValue === 76) {
  elementL.setAttribute("style", 
                        "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
  soundTik.play();
    function resetButton() {
    elementL.removeAttribute("style")
  };
  setTimeout(resetButton, 500);
  elementL.setAttribute("style", 
    "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;");
  }
});