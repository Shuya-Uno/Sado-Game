/*
  goTo script
  originally made as "goToCross"; multiple routes version of now named "goToProto"
  clicking on elements (such as images) trigger a jump to another page

  use case is not limited to when there are multiple destinations; you can also use this when there is only one
  again refined for any use cases (now refers to class instead of id)
*/

var target  = document.getElementsByClassName('routes')
// cache collection of DOM queries
var numberTargets = target.length;
// check the number of nodes in the collection

function goTo(e) {
  location.href = e.target.classList[0] + ".html";
  /* creates the url to jump according to the class of the element clicked
     the first class configured is reffered

     Event.target returns the element that triggered the event
     very useful (similar to "this")

     Element.classList returns the names of all classes in the form of collection
     you can refer to each class in array style (classList.[x])
  */
}

var i = 0;
while (numberTargets > i) {
  target[i].addEventListener('click', goTo);
  i++;
}
/*
   add event listener(click) to all nodes that has the class "routes"
   using the while loop to keep the code DRY
*/
