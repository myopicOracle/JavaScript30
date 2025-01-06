// const log = console.log

const base = document.getElementById("base")
//     log(color)
const colorPick = base.value
//     log(colorPick)

const image = document.querySelector("img")
    // log(image)

// function changeColor(image) {
//     console.log(image.setAttribute("background-color",`${colorPick}`))
//     // log(image.setAttribute("background-color",`${colorPick}`))
// }

base.addEventListener("click", (e) => 
    e.setAttribute("background-color",`${colorPick}`))








// function handleFunction() {

// }


// const spacing = document.getElementById("spacing")
// // spacing.addEventListener("click", handleFunction)

// spacing.addEventListener("click", (e) => console.log(e.value) )