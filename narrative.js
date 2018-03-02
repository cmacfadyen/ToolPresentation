//getElementById "targets" that element so you can do something with it.
//first, we add an 'event listener' to react to a click of the button
document.getElementById("reflect").addEventListener("click", function(){
  //when the button is clicked, we decrease the opacity of main and make reflect-box visible
  document.getElementById("main").style.opacity="0.2";
  document.getElementById("reflect-box").style.visibility="visible";
});
