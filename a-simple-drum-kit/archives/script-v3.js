  const keys = document.querySelector(".keys")
  //const key = document.querySelector(".key")
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
  


    /*function playSong(src) {
      "sounds/clap.wav"
    }*/

// the two below are an attemp that hasn't worked yet
const sound = new Audio()

const playSound = (id) => {
  const key = audioArray.find((key) => key.id === id);
  sound.src = key.src;
  sound.play();
}
//==============

const soundClap = document.getElementById("65")
const soundHiHat = document.getElementById("83")
const soundKick = document.getElementById("68")
const soundOpenHat = document.getElementById("70")
const soundBoom = document.getElementById("71")
const soundRide = document.getElementById("72")
const soundSnare = document.getElementById("74")
const soundTom = document.getElementById("75")
const soundTik = document.getElementById("76")


  elementA.addEventListener("click", () => {
    elementA.setAttribute("style", 
                          "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
    //document.getElementById("audio[data-key='65']")
    //playSound(65);
    soundClap.play()

});   
  elementS.addEventListener("click", () => {
    elementS.setAttribute("style", 
                          "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
    //document.getElementById("audio[data-key='65']")
    soundHiHat.play();
});
  elementD.addEventListener("click", () => {
    elementD.setAttribute("style", 
                          "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
    //document.getElementById("audio[data-key='65']")
    soundKick.play();

});
  elementF.addEventListener("click", () => {
    elementF.setAttribute("style", 
                          "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
    //document.getElementById("audio[data-key='65']")
    soundOpenHat.play();

});
  elementG.addEventListener("click", () => {
    elementG.setAttribute("style", 
                          "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
    //document.getElementById("audio[data-key='65']")
    soundBoom.play();

});
  elementH.addEventListener("click", () => {
    elementH.setAttribute("style", 
                          "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
    //document.getElementById("audio[data-key='65']")
    soundRide.play();

});
  elementJ.addEventListener("click", () => {
    elementJ.setAttribute("style", 
                          "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
    //document.getElementById("audio[data-key='65']")
    soundSnare.play();

});
  elementK.addEventListener("click", () => {
    elementK.setAttribute("style", 
                          "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
    //document.getElementById("audio[data-key='65']")
    soundTom.play();

});
  elementL.addEventListener("click", () => {
    elementL.setAttribute("style", 
                          "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
    //document.getElementById("audio[data-key='65']")
    soundTik.play();

});
  
  
  
  
/* elementA.addEventListener("click", () => {
    elementA.setAttribute("style", 
                          "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
});  */


/*
const elementAny = document.querySelector(`[data-key="${value}"]`)

value = Array.from(keyNodeList).getAttribute("data-key")


elementAny.addEventListener("click", () => {
    elementAny.setAttribute("style", 
                          "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
});
*/
  
/*
something with that data value


value = Array.from(keyNodeList).getAttribute("data-key")

keyNodeList.find(something with that data value)
  
  function
    
    */
    