  var audio = new Audio('magicflute.mp3');
  audio.loop=false;
  audio.play();
  var i=0
  var newMess;
  var messages =["With JavaScript you can...",
  "Show and hide elements,",
  "Change the style of an element,",
  "Make events happen in response to user actions...",
  "...or at specific time intervals (like this),",
  "Play audio (do you hear it?),",
"and more...",
];


    newMess = window.setInterval(function(){
      if(i>=messages.length){
        clearInterval(newMess);
        document.getElementById("show-mess").style.visibility="hidden";
        document.getElementById("script-content").style.visibility="visible";
      }
      document.getElementById("show-mess").innerHTML=messages[i];
    i++;
  }, 3000);
