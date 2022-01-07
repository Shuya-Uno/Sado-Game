
/*
   hoverLink script
   hovering on and off the image also changes the color of link

   a substitute for putting image inside the <a> element
*/

const change = document.querySelector('a');
const triggerOne = document.getElementsByClassName('routes')[0];
const triggerTwo = change.parentNode;
/*
   cache DOM queries
   triggerTwo, by traversing the DOM
   (at least refering to the parent node is perfectly safe)
*/
function lightOn() {
  change.style.color = "#ffd328";
}
// hovering on element changes the color of the link

function lightOff() {
  change.style.color = "black";
}
// hovering off element changes the color of the link to what it used to be

triggerOne.addEventListener('mouseover', lightOn);
triggerOne.addEventListener('mouseout', lightOff);
triggerTwo.addEventListener('mouseover', lightOn);
triggerTwo.addEventListener('mouseout', lightOff);
change.addEventListener('mouseover', lightOn);
change.addEventListener('mouseout', lightOff);

/*
   add event listener to the link itself too, since once color is changed by script,
   CSS :hover style will lose effect
   (the biggest downside)

   reccomendation: leave :hover intact for those having JavaScript disabled
*/
