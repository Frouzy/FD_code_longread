//Typewriter
//Opening
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "    ", "Waarom deze journalist", "leerde programmeren,", "...en hoe dat ging."]

  function typeWriter(text, i, fnCallback) {
    
    if (i < (text.length)) {
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
  
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000);
    }
  }
 
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
        StartTextAnimation(0);
        }, 1000);
     }
 
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
      StartTextAnimation(i + 1);
     });
    }
  }

  StartTextAnimation(0);
});

//Typewriter
//Quote
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = ["'Het was alsof ik elke les mijn eerste rijles had. Tijd om op adem te komen had ik niet'"]

  function typeWriter(text, i, fnCallback) {
    
    if (i < (text.length)) {
     document.querySelector('#quote-1').innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
  
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000);
    }
  }
 
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
        StartTextAnimation(0);
        }, 1000); //Hier zit de herhaling in
     }

    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
      StartTextAnimation(i + 1);
     });
    }
  }


  StartTextAnimation(0);
});

//Typewriter
//Quote - 2 
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = ["'Wie zijn huiswerk niet op tijd af had, kreeg minpunten'"]

  function typeWriter(text, i, fnCallback) {
    
    if (i < (text.length)) {
     document.querySelector('#quote-2').innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
  
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000);
    }
  }
 
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
        StartTextAnimation(0);
        }, 1000); //Hier zit de herhaling in
     }

    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
      StartTextAnimation(i + 1);
     });
    }
  }


  StartTextAnimation(0);
});


//Typewriter
//Quote - 3
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = ["'Het gaat om kleine blokken oplossingen die je op elkaar stapelt tot een groot blok code'"]

  function typeWriter(text, i, fnCallback) {
    
    if (i < (text.length)) {
     document.querySelector('#quote-3').innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
  
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000);
    }
  }
 
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
        StartTextAnimation(0);
        }, 1000); //Hier zit de herhaling in
     }

    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
      StartTextAnimation(i + 1);
     });
    }
  }


  StartTextAnimation(0);
});

//Typewriter
//Tussenkop
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = ["Net als ik wist waar het over ging,", "...gooide hij er een nieuwe taal in."]

  function typeWriter(text, i, fnCallback) {
    
    if (i < (text.length)) {
     document.querySelector(".subheader-animated-1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
  
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000);
    }
  }
 
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
        StartTextAnimation(0);
        }, 1000);
     }
 
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
      StartTextAnimation(i + 1);
     });
    }
  }

  StartTextAnimation(0);
});


//Typewriter
//Tussenkop
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = ["Wie goed kan zoeken op Google,", "...komt er uiteindelijk ook."]

  function typeWriter(text, i, fnCallback) {
    
    if (i < (text.length)) {
     document.querySelector(".subheader-animated-2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
  
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000);
    }
  }
 
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
        StartTextAnimation(0);
        }, 1000);
     }
 
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
      StartTextAnimation(i + 1);
     });
    }
  }

  StartTextAnimation(0);
});