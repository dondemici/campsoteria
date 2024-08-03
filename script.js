
//Clock in Home Page
setInterval(runClock, 1000); // Use function reference directly, not as a string
runClock();

function runClock(){
    let today = new Date();
    let cDate = today.toLocaleDateString(); // Corrected method name
    let timeStr = today.toLocaleTimeString();
    document.getElementById("dateNow").innerHTML = cDate +" " + timeStr; // Use innerHTML for line breaks
}


//Slideshow of 3 Photos in Home Page
//setInterval(showSlides, 5000)
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

//Navigation Bar change for small screens
function toggleMenu() {
  const nav = document.querySelector('header nav');
  nav.classList.toggle('active');

  const slideshow = document.querySelector('.slideshow-container');
  if (nav.classList.contains('active')) {
      slideshow.style.marginTop = '80px'; // Adjust based on header height
  } else {
      slideshow.style.marginTop = '0';
  }
}

