//hover to play videos
let vid = document.getElementsByClassName('prototypevid');
for(i=0; i<vid.length; i++){
vid[i].addEventListener("mouseenter", playvid);
vid[i].addEventListener("mouseleave", pausevid);
}

function playvid(e){
  e.target.play();
}

function pausevid(e){
  e.target.pause();
}

// code credit: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_gallery

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
