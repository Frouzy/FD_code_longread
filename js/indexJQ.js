//Carousel
$(document).ready(function () {

    var text = ['7 nationaliteiten','twee avonden p/wk','bij elkaar','om te programmeren']
    var images = ['url(images/Classroom1.jpg)','url(images/Classroom2.jpg)','url(images/Classroom1.jpg)','url(images/Classroom2.jpg)']
    var numImages = images.length;
    var index = 0;

    function carousel() {
        $('#titleSlide').html(text[index]);  
        $('#sectieSlide').css('background-image', images[index]);  
        $('#sectieSlide').css('background-size', 'cover'); 
        $('#sectieSlide').css('background-position', 'center center');   
        index = (index + 1) % numImages;
    }

    timer = setInterval(carousel, 2000);
});

//Dropdowns 

$(".button-1").on("click", function (e) {
    $(".entry-1").slideToggle(300);
});

$(".button-2").on("click", function (e) {
    $(".entry-2").slideToggle(300);
});

$(".button-3").on("click", function (e) {
    $(".entry-3").slideToggle(300);
});

$(".button-4").on("click", function (e) {
    $(".entry-4").slideToggle(300);
});

$(".button-5").on("click", function (e) {
    $(".entry-5").slideToggle(300);
});