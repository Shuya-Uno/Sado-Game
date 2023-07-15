/*
  goTo script
  Originally made as "goToCross"; multiple routes version of now named "goToProto"
  Clicking on elements (such as images) trigger a jump to another page

  Use case is not limited to when there are multiple destinations;
   you can also use this when there is only one
*/


const routes  = document.getElementsByClassName('routes')
// Cache collection of DOM queries



function goTo(e) {
  location.href = e.target.classList[0] + ".html";
}
/*
   Creates a url to jump to, according to the first class name of the element clicked

   note: e.target returns the element that triggered the event
         Very useful (similar to "this")

         element.classList returns the names of all classes in an element, in the form of "collection"
         You can refer to each class name in array style (classList.[x])
         In this case, the class placed former to "routes" is referred
*/

for (const targetEl of routes) {
  targetEl.addEventListener('click', goTo);
}
/*
   Add event listener(click) to all nodes that has the class "routes"
   Updated the loop (while → for of) for the code to be more concise
    (No need of caching the length of DOM Collection)
*/
