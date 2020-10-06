window.onload = function()
{
  var div = document.getElementById("testdiv");

  var para = document.createElement("p");
  div.appendChild(para);
  var text = document.createTextNode("Hello javascript");
  para.appendChild(text);
}
