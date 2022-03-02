
/*
   hoverLink script
   Hovering on and off the image changes the color of the link (below)
   (a substitute for putting image inside the <a> element)
*/

const change = document.querySelector('a');
const triggerOne = document.getElementsByClassName('routes')[0];
const triggerTwo = change.parentNode;
/*
   Cache DOM queries
   For triggerTwo, done by traversing the DOM
    (referring to the parent node is perfectly safe)
*/

const colored = "#ffd328";
const original = "#000";


function lightOn() {
  change.style.color = colored;
}
// Hovering on element changes the color of the link

function lightOff() {
  change.style.color = original;
}
// Hovering off element changes the color of the link back to what it used to be


triggerOne.addEventListener('mouseover', lightOn);
triggerOne.addEventListener('mouseout', lightOff);
triggerTwo.addEventListener('mouseover', lightOn);
triggerTwo.addEventListener('mouseout', lightOff);
change.addEventListener('mouseover', lightOn);
change.addEventListener('mouseout', lightOff);

/*
   Add event listener to the link itself too, since once color is changed by script,
    CSS :hover style will lose effect (downside)

   reccomendation: leave :hover intact for those having JavaScript disabled
*/
