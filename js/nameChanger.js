/*
   userName script
   changes the adressee written in the letter
   Pressing the button makes the browser to retrieve user's (name) input
    and change the entire content of the salutation part.

   currelntly page specific script
*/

var userName = document.getElementById('salutation');
var userInput = document.getElementById('input');
var target = document.querySelector('button');
// cache all required DOM queries

function nameChanger() {

  var inputValue = userInput.value
  // retrieve user input (which would be a name)
  // changed to be local so that it can retrieve input multiple times

  userName.textContent = "Dear " + inputValue + ","
  // update the whole #salutation content with the proposed name
  // avoided using innerHTML with potential risk of XSS

}


// start main code

target.addEventListener('click', nameChanger)
// script fires when button is clicked

//end main code
