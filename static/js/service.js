/*
  GROUP: Lulu Fokming, Francisco Reyes, Anri Ferris
  Author: Lulu Fokming
  DATE 9/30/2022
  DESCRIPTION: This is ISM6225.360F22  Assignment2
*/

let slideIndex = 0;
/* Set to refresh slides*/
autoSlides();

/*Increment or decrement current slide base on onclick of next or previous arrows*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/*Show the slide based on which dot at the bottom of the slides was clicked*/
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/*This function handles the manual click of next and previous or the dots cliking*/
function showSlides(slidenum) {
  let i;
  /* get all the divs within the class name service-slide*/
  let service_slides = document.getElementsByClassName("service-slide");
  /* get all the spans within the class name dot*/
  let dots = document.getElementsByClassName("dot");
  /* go to the first slide if current is greated than number of slides*/
  if (slidenum > service_slides.length) {slideIndex = 1}   
  /* if the current slide number is zero, go to the last slide*/ 
  if (slidenum < 1) {slideIndex = service_slides.length}
  /*reinitialize: hide alls slides*/
  for (i = 0; i < service_slides.length; i++) {
    service_slides[i].style.display = "none";  
  }
  /*reinitialize:Set all dots to non active*/
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  /*set the current slide to display within the block defined in the css service-img-inner */
  service_slides[slideIndex-1].style.display = "block";  
  /* set the corresponding dot for the current slide to active*/
  dots[slideIndex-1].className += " active";
}

/* This functions handles the auto rotation of the slides per timer*/
function autoSlides() {
  let i;
  let service_slides = document.getElementsByClassName("service-slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < service_slides.length; i++) {
    service_slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > service_slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  service_slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  /* set the time so, the slides auto changes every 12 seconds*/
  setTimeout(autoSlides, 12000);  
   
}
