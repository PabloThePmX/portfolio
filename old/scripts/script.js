let speed = 70;
let txt = `Hey! I'm Pablo! :)`;
let i = 0;

function typeWriter() {
    if(i == 0){
      document.getElementById("typing-intro").innerHTML = "";
    }
    if (i < txt.length) {
        document.getElementById("typing-intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else{
      i = 0;
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}

function setTime(){
    let today = new Date();
    let timeHours = 0;
    let timeMinutes= 0;
    // var time = today.getHours() + ":" + today.getMinutes();
    if(today.getHours() < 10){
        timeHours = "0" + today.getHours();
    } else{
        timeHours = today.getHours()
    }
    if(today.getMinutes() < 10){
        timeMinutes = "0" + today.getMinutes();
    } else{
        timeMinutes = today.getMinutes();
    }
    var time = timeHours + ":" + timeMinutes;
    let timeContainer = document.getElementById("hour");
    timeContainer.innerHTML = time;

    setInterval(setTime, 10000);
}

window.onload = function() {
    typeWriter();
    setTime();
};

//go to the header when the page is reloaded
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}