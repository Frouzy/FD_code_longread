//Typewriter
//Opening
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "    ", "Dit leest u", "Omdat ik leerde programmeren"]

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
  var dataText = ["'Waarom moet iedereen die bij internetbedrijf Booking.com werkt kunnen programmeren?'"]

  function typeWriter(text, i, fnCallback) {
    
    if (i < (text.length)) {
     document.querySelector('.article-quote').innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
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



