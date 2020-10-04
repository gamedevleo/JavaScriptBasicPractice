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
