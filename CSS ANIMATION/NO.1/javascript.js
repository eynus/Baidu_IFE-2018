window.onload=function(){
  var btn=document.getElementById("btn");
  var text=document.getElementById("text");
  btn.onclick=function(){
    text.classList.toggle("change");
  }
}