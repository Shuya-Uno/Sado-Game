/*
   userName script
   Changes the adressee written in the letter
   Pressing the button makes the browser to retrieve user's (name) input
    and change the entire content of the salutation part.
*/

let userName = document.getElementById('salutation');
let userInput = document.getElementById('input');
let inputValue;
const target = document.querySelector('button');


function nameChanger() {

  inputValue = userInput.value;
  /*
     Retrieve user input (which would be a name)
     Can retrieve input multiple times
  */

  userName.textContent = "Dear " + inputValue + ",";
  /*
     Update the whole content in #salutation with the given name
      (avoided using innerHTML, which is with potential risk of XSS)
  */
}


// start main code

target.addEventListener('click', nameChanger);
// Script fires when button is clicked

//end main code
