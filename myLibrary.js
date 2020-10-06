function insertAfter(newElement,targetElement){   //insertNewElement after targetElement
  var parent = targetElement.parentNode;
  if(parent.lastChild == targetElement)
  {
    parent.appendChild(newElement);
  }
  else{
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}


function addLoadEvent(func){      //addLoadEvent function can add more than one function to onload if necessary
  var oldOnload = window.onload;
  if(typeof window.onload != 'function')
  {
    window.onload = func;
  }
  else
  {
      window.onload = function(){
        oldOnload();
        func();
      }
  }
}
