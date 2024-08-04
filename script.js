//Developer: Dundee Adriatico
//Date: 21 Jun 2024
"use strict";

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
//Slideshow script from w3schools (https://www.w3schools.com/howto/howto_js_slideshow.asp)
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
//Slideshow End

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

//display Previous Job Postings;
function displayPrevPosts() {
  let jobPost = ["Resort Manager","Kitchen Helper","Cook","Housekeeper"];
  let jobStatus = ["Closed","Closed","Closed","Closed"];
  let startNumber = 4;  // Starting number as 4 to get 004
  let result = "<table>";
  result += "<tr><th>Number</th><th>Position</th><th>Status</th></tr>";  // Add table headers
  for (let i = 0; i < jobPost.length; i++) {
      let number = (startNumber + i).toString().padStart(2, '0');  // Format number to 2 digits
      result += "<tr><td>"  + number + "</td><td>" + jobPost[i] + "</td><td>" + jobStatus[i] +"</td></tr>";
  }
  result += "</table>";
  document.getElementById("courseTable").innerHTML = result;
}

//Reference:
//Author: W3Schools.com
//Date: (n.d.). (since no specific date is provided on the page)
//Title: How To Create a Slideshow
//Website name: W3Schools
//URL: https://www.w3schools.com/howto/howto_js_slideshow.asp
