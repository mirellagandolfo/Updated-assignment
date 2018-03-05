console.log("hi")
// About page readmore/readless
$(".readmore a").click(function(){
  event.preventDefault();
  $("#show-this-on-click").slideDown(600)
  $(".readmore").hide()
  $(".readless").show()
})
$(".readless a").click(function(){
  event.preventDefault();
  $("#show-this-on-click").slideUp(600)
  $(".readless").hide()
  $(".readmore").show()
})


// Slider for home page

$(document).ready(function(){
  var movingImage = true;
  setInterval(function() {
    if (movingImage) {
      var $imageToMove = $('.slides-container > img:first-child')
      $imageToMove.addClass('image-to-move')
      movingImage = false;
    } else {
      var $imageToChangeOrder = $('.slides-container > img:first-child')
      $imageToChangeOrder.appendTo('.slides-container')
      $imageToChangeOrder.removeClass('image-to-move')
      movingImage = true;
    }
  }, 3000)
})




// Modal and Slideshow for "Corporate Section"

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { // Next/previous controls//
  showSlides(slideIndex += n);
}

function currentSlide(n) { // Thumbnail image controls//
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


//Modal/lightbox for 'Education Section' //

function openModal_2() {
  document.getElementById('myModal_2').style.display = "block";
}

function closeModal_2() {
  document.getElementById('myModal_2').style.display = "none";
}

var slideIndex= 1;
showSlides(slideIndex);

function plusSlides(n) { // Next/previous controls//
  showSlides(slideIndex += n);
}

function currentSlide(n) { // Thumbnail image controls//
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_2");
  var dots = document.getElementsByClassName("demo_2");
  var captionText = document.getElementById("caption_2");
  if (n > slides.length) {slideIndex_2 = 1}
  if (n < 1) {slideIndex_2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Modal/lightbox for 'Advertising Section'

function openModal_3() {
  document.getElementById('myModal_3').style.display = "block";
}


function closeModal_3() {
  document.getElementById('myModal_3').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);



function plusSlides(n) { // Next/previous controls//
  showSlides(slideIndex += n);
}


function currentSlide(n) { // Thumbnail image controls//
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_3");
  var dots = document.getElementsByClassName("demo_3");
  var captionText = document.getElementById("caption_3");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// Modal/lightbox for 'Publication Section'

function openModal_4() {
  document.getElementById('myModal_4').style.display = "block";
}

function closeModal_4() {
  document.getElementById('myModal_4').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { // Next/previous controls//
  showSlides(slideIndex += n);
}

function currentSlide(n) { // Thumbnail image controls//
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_4");
  var dots = document.getElementsByClassName("demo_4");
  var captionText = document.getElementById("caption_4");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
