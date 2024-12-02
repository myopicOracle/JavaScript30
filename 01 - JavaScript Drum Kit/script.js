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

// Reference Concepts & Examples 

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