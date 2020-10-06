addLoadEvent(prepareGallery);
addLoadEvent(prepareLinks);
addLoadEvent(preparePlaceholder);


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


function prepareGallery(){
  if(!document.getElementsByTagName) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("image_gallery")) return false;

  var gallery = document.getElementById("image_gallery");
  var links = gallery.getElementsByTagName("a");

  for(var i=0;i<links.length;i++)
  {
    links[i].onclick = function(){
      return showPic(this) ? false : true;           //if showPic success    return false to stop browser default beheviour,
                                      //if showPic failed     return true to open the link in a new window
    }
  }
}
function insertAfter(newElement,targetElement){
  var parent = targetElement.parentNode;
  if(parent.lastChild == targetElement)
  {
    parent.appendChild(newElement);
  }
  else{
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}
function preparePlaceholder(){
  if(!document.createElement) return false;
  if(!document.createNextNode) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById('image_gallery')) return false;

  var placeholder = document.createElement('img');
  placeholder.setAttribute('id','placeholder');
  placeholder.setAttribute('src','./images/placeholder.jpg');
  placeholder.setAttribute('alt','This is placeholder.');
  var descriptionPara = document.createElement('p');
  descriptionPara.setAttribute('id','description');
  var descriptionText = document.createTextNode("This is a description");
  descriptionPara.appendChild(descriptionText);
  var gallery = document.getElementById('image_gallery');
  insertAfter(placeholder,gallery);
  insertAfter(descriptionPara,placeholder);
}

function showPic(whichPic)
{
  if(!document.getElementById("placeholder")) return false;
  var source = whichPic.getAttribute("href");
  var placeholder = document.getElementById('placeholder');
  if(placeholder.nodeName != "IMG") return false;    //nodeName in capital
  placeholder.setAttribute("src",source);

  if(document.getElementById("description"))
  {
    var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
    var description = document.getElementById("description");
    if(description.firstChild.nodeType ==3)        //3 means the type of firstChild is text node
    {
      description.firstChild.nodeValue = text;
    }

  }
  return true;
}

function popUp(winUrl){
  window.open (winUrl, 'new', 'height=100, width=400, top=0,left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no')
}

function prepareLinks(){
  var links = document.getElementsByTagName("a");
  for(var i=0; i<links.length;i++)
  {
    if(links[i].getAttribute("class") == "popup")
    {
      links[i].onclick = function(){
        popUp(this.getAttribute("href"));
        return false;
      }
    }
  }
}
