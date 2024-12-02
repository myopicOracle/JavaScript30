/* Pseudocode 

    identify and select all keys 
    turn this selection into array (NodeList)

    create function that iterates through array 
    add class attribute 'playing' to all keys
    function returns el associated with data-key

    create another function
    this function changes CSS of Element 
    it changes it by calling function with .playing
    
    set event checkpoint to listen for user action
    once observed, execute change CSS function

*/
/*
<div class="keys">
<div data-key="65" class="key">
  <kbd>A</kbd>
*/
// Reference Concepts & Examples 

/*
    document.querySelectorAll('[data-foo="value"]');

    let div = document.getElementById('myDiv');
    let value = div.dataset.myAttribute;
    console.log(value); // "myValue"

    const elements = document.querySelectorAll('[data-your-attribute="your-value"]');

    const div1 = document.getElementById("div1");
    //=> <div id="div1">Hi Champ!</div>

    const exampleAttr = div1.getAttribute("id");
    //=> "div1"

    // array
    permittedValues = array.map(function(value) {
        return value.key;
    });

    //using .dataset property
    let div = document.getElementById('myDiv');
    let value = div.dataset.myAttribute;
    console.log(value); // "myValue"

    //using .getAttribute() function
    let div = document.getElementById('myDiv');
    let value = div.getAttribute('data-myAttribute');
    console.log(value); // "myValue"
---------------
*/

// VERSION --------- Manual Test -------

const keys = document.querySelector(".keys")
const keyNodeList = document.querySelectorAll(".key")

    //const newArray = Array.from(keyNodeList).map(item => item.setAttribute("class", ".playing")); // this sets .playing's CSS to all nodes in newArray

    //find data-key value
    //const value = document.getAttribute("data-key")

//Perform action on element after click
const elementA = document.querySelector("[data-key='65']")

// once elementA is clicked, it's inner CSS should be updated with .player

elementA.addEventListener("click", () => {
    elementA.setAttribute("style", 
        "transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem;")
});










// VERSION --------- AUTOMATED ------- Incomplete 
/*
        const keys = document.querySelector(".keys")
        const keyNodeList = document.querySelectorAll(".key")

        const newArray = keyNodeList.map(item => item.setAttribute("class", ".playing"));

        //find data-key value
        const value = document.getAttribute("data-key")

        //Perform action on element after click
        const element = document.querySelectorAll(`[data-key="${value}"]`)

        find num
*/

